<script setup>
import CreateButton from '@/components/button/CreateButton.vue'
import ExcelButton from '@/components/button/ExcelButton.vue'
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import SearchTable from '@/components/table/SearchTable.vue'
import UserPagination from '@/components/table/UserPagination.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import useConfirmBeforeDelete from '@/composables/useConfirmBeforeDelete'
import useExcelDownload from '@/composables/useExcelDownload'
import { useSingleUser } from '@/stores/user/userSingleStore'
import { useUser } from '@/stores/user/userStore'
import UserCreateModal from '@/views/user/UserCreateModal.vue'
import { onMounted, ref, watch } from 'vue'

const userStore = useUser()
const userSingleStore = useSingleUser()
const pageNumber = ref(1)
const showModal = ref(false)
const isNew = ref(true)

const newUser = async () => {
  isNew.value = true
  await userSingleStore.setDefault()
  showModal.value = !showModal.value
}
const editUser = async (id) => {
  isNew.value = false
  await userSingleStore.setDefault()
  await userSingleStore.getUser(id)
  showModal.value = !showModal.value
}

const deleteUser = async (user) => {
  useConfirmBeforeDelete(
    async () => {
      await userSingleStore.delete(user.id)
      await userStore.getUsers(1)
    },
    { question: `${user.first_last}?` }
  )
}
const download = () => {
  let whichExcel = 'user'
  useExcelDownload(whichExcel)
}

watch(
  () => userStore.stateQ,
  () => {
    userStore.getSearch()
  }
)

onMounted(() => {
  userStore.getUsers(pageNumber)
})
</script>

<template>
  <PageDefaultLayout>
    <HeaderOne>Gebruikers</HeaderOne>
    <UserCreateModal :editing="isNew" v-if="showModal" @closeModal="showModal = false" />
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="flex justify-between py-3 px-3">
          <SearchTable v-model="userStore.query"></SearchTable>
          <CreateButton @click="newUser" />
        </div>

        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable class="w-0.5">ID</HeaderTable>
                  <HeaderTable class="w-1/5">Naam</HeaderTable>
                  <HeaderTable>EMAIL</HeaderTable>
                  <HeaderTable>WIJZIG</HeaderTable>
                  <HeaderTable>VERWIJDER</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="user in userStore.users"
                  :key="user.id"
                  class="hover:bg-gray-200 dark:hover:bg-gray-500"
                >
                  <RowTable>{{ user.id }}</RowTable>
                  <RowTable>{{ user.first_last }}</RowTable>
                  <RowTable>{{ user.email }}</RowTable>
                  <RowTable>
                    <a
                      class="text-green-500 hover:text-green-700 cursor-pointer"
                      @click="editUser(user.id)"
                    >
                      Wijzig
                    </a>
                  </RowTable>
                  <RowTable>
                    <a
                      class="text-red-500 hover:text-red-700 cursor-pointer"
                      @click="deleteUser(user)"
                      >Verwijder</a
                    >
                  </RowTable>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <UserPagination v-if="userStore.meta && userStore.meta.last_page > 1" />
        <ExcelButton class="ml-4 mb-10 mt-10" @click="download" />
      </div>
    </div>
  </PageDefaultLayout>
</template>
