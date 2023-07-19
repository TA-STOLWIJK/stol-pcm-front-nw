<script setup>
import CreateButton from '@/components/button/CreateButton.vue'
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
import ClientPagination from '@/components/table/ClientPagination.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import SearchTable from '@/components/table/SearchTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import useConfirmBeforeDelete from '@/composables/useConfirmBeforeDelete'
import { useSingleClient } from '@/stores/client/clientSingleStore'
import { useClients } from '@/stores/client/clientStore'
import ClientCreateEditModal from '@/views/client/ClientCreateEditModal.vue'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const clientsStore = useClients()
const clientSingleStore = useSingleClient()
const pageNumber = ref(1)
const resetValue = ref('a')
const showModal = ref(false)
const isNew = ref(true)

const router = useRouter()

const newClient = async () => {
  isNew.value = true
  await clientSingleStore.setDefault()
  showModal.value = !showModal.value
}
const editClient = async (id) => {
  clientsStore.query = resetValue
  isNew.value = false
  await clientSingleStore.setDefault()
  await clientSingleStore.getClient(id)
  showModal.value = !showModal.value
}

const deleteClient = async (client) => {
  useConfirmBeforeDelete(
    async () => {
      await clientSingleStore.delete(client.id)
      await clientsStore.getClients(1)
    },
    { question: `${client.first_name_client}` + `${client.last_name_client}` }
  )
}

const goQuick = (id) => {
 router.push({ name: "pcmIndex", params: { id: id } })
}

watch(
  () => clientsStore.query,
  () => {
    clientsStore.getSearch()
  }
)

onMounted(() => {
  clientsStore.query = null
  clientsStore.getClients(pageNumber)
})
</script>

<template>
  <PageDefaultLayout>
    <HeaderOne>Klanten</HeaderOne>
    <ClientCreateEditModal :editing="isNew" v-if="showModal" @closeModal="showModal = false" />
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="flex justify-between py-3 px-3">
          <SearchTable v-model="clientsStore.query"></SearchTable>
          <CreateButton @click="newClient" />
        </div>

        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable class="w-0.5">ID</HeaderTable>
                  <HeaderTable class="w-1/6">Voornaam</HeaderTable>
                  <HeaderTable class="w-1/6">Achternaam</HeaderTable>
                  <HeaderTable class="w-1/6">Plaats</HeaderTable>
                  <HeaderTable class="w-1/6">Bedrijfsnaam</HeaderTable>
                  <HeaderTable>Wijzig</HeaderTable>
                  <HeaderTable>VERWIJDER</HeaderTable>
                  <HeaderTable>QuickScans</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="client in clientsStore.clients"
                  :key="client.id"
                  class="hover:bg-gray-200 dark:hover:bg-gray-500"
                >
                  <RowTable>{{ client.id }}</RowTable>
                  <RowTable>{{ client.first_name_client }}</RowTable>
                  <RowTable>{{ client.last_name_client }}</RowTable>
                  <RowTable>{{ client.place_client }}</RowTable>
                  <RowTable>{{ client.company_name_client }}</RowTable>
                  <RowTable>
                    <a
                      class="text-green-500 hover:text-green-700 cursor-pointer"
                      @click="editClient(client.id)"
                    >
                      Wijzig
                    </a>
                  </RowTable>
                  <RowTable>
                    <a
                      class="text-red-500 hover:text-red-700 cursor-pointer"
                      @click="deleteClient(client)"
                      >Verwijder</a
                    >
                  </RowTable>
                  <RowTable>
                    <a
                      class="text-orange-500 hover:text-orange-800 cursor-pointer"
                      @click="goQuick(client.id)"
                      >Ga</a
                    >
                  </RowTable>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <ClientPagination v-if="clientsStore.meta && clientsStore.meta.last_page > 1" />
      </div>
    </div>
  </PageDefaultLayout>
</template>
