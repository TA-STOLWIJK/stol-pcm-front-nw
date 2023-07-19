<script setup>
import CreateButton from '@/components/button/CreateButton.vue'
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import useConfirmBeforeDelete from '@/composables/useConfirmBeforeDelete'
import { useSingleMass } from '@/stores/mass/massSingleStore'
import { useMass } from '@/stores/mass/massStore'
import MassCreateEditModal from '@/views/mass/MassCreateEditModal.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const massStore = useMass()
const massSingleStore = useSingleMass()

const showModal = ref(false)
const isNew = ref(true)

const newAction = async () => {
  isNew.value = true
  await massSingleStore.setDefault()
  showModal.value = !showModal.value
}
const editAction = async (id) => {
  isNew.value = false
  await massSingleStore.setDefault()
  await massSingleStore.getAction(id)
  showModal.value = !showModal.value
}

const selectAction = async (Id) => {
  await router.push({ name: 'massClientIndex', params: { id: Id } })
}

const deleteAction = async (action) => {
  useConfirmBeforeDelete(
    async () => {
      await massSingleStore.delete(action.id)
      await massStore.getActions()
    },
    { question: `${action.name_action}` }
  )
}
onMounted(() => {
  massStore.getActions()
})
</script>

<template>
  <PageDefaultLayout>
    <HeaderOne>Collectieve acties</HeaderOne>
    <MassCreateEditModal :editing="isNew" v-if="showModal" @closeModal="showModal = false" />
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="flex justify-end py-3 px-3">
          <CreateButton @click="newAction" />
        </div>

        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable class="w-0.5">ID</HeaderTable>
                  <HeaderTable class="w-1/5">Naam</HeaderTable>
                  <HeaderTable>Datum aangemaakt</HeaderTable>
                  <HeaderTable>WIJZIG</HeaderTable>
                  <HeaderTable>SELECTEER</HeaderTable>
                  <HeaderTable>VERWIJDER</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="action in massStore.actions"
                  :key="action.id"
                  class="hover:bg-gray-200 dark:hover:bg-gray-500"
                >
                  <RowTable>{{ action.id }}</RowTable>
                  <RowTable>{{ action.name_action }}</RowTable>
                  <RowTable>{{ action.created_at }}</RowTable>
                  <RowTable>
                    <a
                      class="text-green-500 hover:text-green-700 cursor-pointer"
                      @click="editAction(action.id)"
                    >
                      Wijzig
                    </a>
                  </RowTable>
                  <RowTable>
                    <a
                      class="text-orange-500 hover:text-orange-700 cursor-pointer"
                      @click="selectAction(action.id)"
                    >
                      Selecteer
                    </a>
                  </RowTable>
                  <RowTable>
                    <a
                      class="text-red-500 hover:text-red-700 cursor-pointer"
                      @click="deleteAction(action)"
                      >Verwijder</a
                    >
                  </RowTable>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </PageDefaultLayout>
</template>
