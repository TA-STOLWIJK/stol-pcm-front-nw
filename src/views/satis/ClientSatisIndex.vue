<script setup>
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import SatisPagination from '@/components/table/SatisPagination.vue'
import SearchTable from '@/components/table/SearchTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import { useSatis } from '@/stores/satis/satisStore'
import SatisLatestModal from '@/views/satis/SatisLatestModal.vue'
import SatisSendModal from '@/views/satis/SatisSendModal.vue'
import { onMounted, ref, watch } from 'vue'

const satisStore = useSatis()
const modalData = ref(null)
const pageNumber = ref(1)

const showModal = ref(false)
const showModal2 = ref(false)
const goDetail = (client) => {
  console.log(client)
  modalData.value = client
  showModal.value = !showModal.value
}

const goSend = (client) => {
  console.log(client)
  modalData.value = client
  showModal2.value = !showModal2.value
}

watch(
  () => satisStore.query,
  () => {
    satisStore.getSearch()
  }
)

onMounted(() => {
  satisStore.query = null
  satisStore.getClients(pageNumber)
})
</script>

<template>
  <PageDefaultLayout>
    <HeaderOne>Klanten</HeaderOne>
    <SatisLatestModal v-if="showModal" @closeModal="showModal = false" :client="modalData" />
    <SatisSendModal v-if="showModal2" @closeModal2="showModal2 = false" :client="modalData" />
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="flex justify-between py-3 px-3">
          <SearchTable v-model="satisStore.query"></SearchTable>
        </div>

        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable class="w-1/6">Voornaam</HeaderTable>
                  <HeaderTable class="w-1/6">Achternaam</HeaderTable>
                  <HeaderTable class="w-1/6">Plaats</HeaderTable>
                  <HeaderTable class="w-1/6">Bedrijfsnaam</HeaderTable>
                  <HeaderTable class="w-1/6">email</HeaderTable>
                  <HeaderTable>Laatste</HeaderTable>
                  <HeaderTable>VESTUUR</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="client in satisStore.clients"
                  :key="client.id"
                  class="hover:bg-gray-200 dark:hover:bg-gray-500"
                >
                  <RowTable>{{ client.first_name_client }}</RowTable>
                  <RowTable>{{ client.last_name_client }}</RowTable>
                  <RowTable>{{ client.place_client }}</RowTable>
                  <RowTable>{{ client.company_name_client }}</RowTable>
                  <RowTable>{{ client.email_client }}</RowTable>
                  <RowTable>
                    <a
                      class="text-green-500 hover:text-green-700 cursor-pointer"
                      @click="goDetail(client)"
                    >
                      Laatste
                    </a>
                  </RowTable>
                  <RowTable>
                    <a
                      class="text-red-500 hover:text-red-700 cursor-pointer"
                      @click="goSend(client)"
                      >Nodig uit</a
                    >
                  </RowTable>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <SatisPagination v-if="satisStore.meta && satisStore.meta.last_page > 1" />
      </div>
    </div>
  </PageDefaultLayout>
</template>
