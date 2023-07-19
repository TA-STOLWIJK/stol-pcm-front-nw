<script setup>
import CheckIcon from '@/assets/svg/check.svg'
import UnCheckIcon from '@/assets/svg/minus-box-outline.svg'
import BackButton from '@/components/button/BackButton.vue'
import MassExcelButton from '@/components/button/mass/MassExcelButton.vue'
import MassInvitButton from '@/components/button/mass/MassInvitButton.vue'
import MassPDFButton from '@/components/button/mass/MassPDFButton.vue'
import PageDefaultLayoutTwo from '@/components/mainStyle/PageDefaultLayoutTwo.vue'
import DividerTable from '@/components/table/DividerTable.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import useConfirmBeforeActive from '@/composables/useConfirmBeforeActive'
import useExcelDownload from '@/composables/useExcelDownload'
import useMassInvitation from '@/composables/useMassInvitation'
import ReportMass from '@/presentations/mass/reportMass.vue'
import { useMassClient } from '@/stores/mass/massClientStore'
import { useSingleMass } from '@/stores/mass/massSingleStore'
import { useTeams } from '@/stores/team/teamStore'
import { useSelectUser } from '@/stores/user/userSelectStore'
import { useDateFormat } from '@vueuse/core'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const teamStore = useTeams()

const massSingleStore = useSingleMass()
const massClientStore = useMassClient()
const userSelectStore = useSelectUser()

const route = useRoute()
const router = useRouter()

const changeStatus = async (client) => {
  useConfirmBeforeActive(
    async () => {
      let massId = route.params.id
      const payload = {
        mass_id: massId,
        client_id: client.client_id
      }
      await massClientStore.setStatus(payload)
      await massClientStore.getMassClients(massId)
    },
    { question: `${client.first_name_client}` + ` ` + `${client.last_name_client}` }
  )
}

const download = () => {
  let massId = route.params.id
  let whichExcel = 'mass'
  useExcelDownload(whichExcel, massId)
}
const download2 = () => {
  let massId = route.params.id
  let whichExcel = 'massReport'
  useExcelDownload(whichExcel, massId)
}

const download3 = () => {
  const link = document.createElement('a')
  link.href = '../files/QuickScan/Toelichting-collectieve-actie.pdf'
  link.setAttribute('download', 'Toelichting-collectieve-actie.pdf')
  link.click()
}
const sendInvite = () => {
  let massId = route.params.id
  let whichScan = massSingleStore.massData.name_scan
  useMassInvitation(whichScan, massId)
}

const goBack = () => {
  router.back()
}

onMounted(async () => {
  let massId = route.params.id
  await massClientStore.getMassClients(massId)
  await massSingleStore.getAction(massId)
  await teamStore.getTeams()
  await userSelectStore.getSelectUser()
})
</script>

<template>
  <PageDefaultLayoutTwo>
    <HeaderOne>Collectieve actie: {{ massSingleStore.massData.name_action }}</HeaderOne>
    <HeaderTwo>Geselecteerde klanten</HeaderTwo>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable class="w-0.5">ID</HeaderTable>
                  <HeaderTable class="w-1/6">Voornaam</HeaderTable>
                  <HeaderTable class="w-1/6">Achternaam</HeaderTable>
                  <HeaderTable class="w-1/6">Plaats</HeaderTable>
                  <HeaderTable class="w-1/6">Geselecteerd</HeaderTable>
                  <HeaderTable>Wijzig status</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="client in massClientStore.mclients"
                  :key="client.id"
                  class="hover:bg-gray-200 dark:hover:bg-gray-500"
                >
                  <RowTable>{{ client.id }}</RowTable>
                  <RowTable>{{ client.first_name_client }}</RowTable>
                  <RowTable>{{ client.last_name_client }}</RowTable>
                  <RowTable>{{ client.place_client }}</RowTable>
                  <RowTable v-if="client.selected" class="text-center"
                    ><CheckIcon class="fill-green-500 h-8"
                  /></RowTable>
                  <RowTable v-if="!client.selected"
                    ><UnCheckIcon class="fill-red-600 h-8"
                  /></RowTable>
                  <RowTable v-if="!massSingleStore.massData.status_send">
                    <a
                      class="text-orange-500 hover:text-orange-800 cursor-pointer"
                      @click="changeStatus(client)"
                      >Wijzig</a
                    >
                  </RowTable>
                  <RowTable v-if="massSingleStore.massData.status_send">
                    <a class="text-orange-500 hover:text-orange-800 cursor-pointer"
                      >Is reeds verstuurd!</a
                    >
                  </RowTable>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <DividerTable />
        <HeaderTwo>Acties</HeaderTwo>
        <div class="overflow-x-auto">
          <div class="p-1.5 w-full inline-block align-middle">
            <div class="overflow-hidden border rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-base_light dark:bg-back_dark">
                  <tr>
                    <HeaderTable class="w-1/2">Beschrijving</HeaderTable>
                    <HeaderTable>Actie</HeaderTable>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                    <RowTable>Maak een Excel rapportage van alle geselecteerde klanten</RowTable>
                    <RowTable><MassExcelButton @click="download" /></RowTable>
                  </tr>
                  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                    <RowTable>Verstuur een uitnodiging aan alle deelnemers</RowTable>
                    <RowTable v-if="!massSingleStore.massData.status_send"
                      ><MassInvitButton @click="sendInvite"
                    /></RowTable>
                    <RowTable v-if="massSingleStore.massData.status_send"
                      >Reeds verzonden op:
                      {{
                        useDateFormat(massSingleStore.massData.date_action_send, 'D-MM-YYYY')
                      }}</RowTable
                    >
                  </tr>
                  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                    <RowTable>Maak een PowerPoint van alle resultaten</RowTable>
                    <RowTable
                      ><report-mass
                        :users="userSelectStore.users"
                        :teams="teamStore.teams"
                        :number-mass="route.params.id"
                    /></RowTable>
                  </tr>
                  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                    <RowTable>Maak een Excel rapportage van alle resultaten</RowTable>
                    <RowTable><MassExcelButton @click="download2" /></RowTable>
                  </tr>
                  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                    <RowTable>Download de toelichting op een collectieve actie</RowTable>
                    <RowTable><MassPDFButton @click="download3" /></RowTable>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-6">
          <div class="col-span-5" />
          <BackButton class="mt-5" @click="goBack" />
        </div>
      </div>
    </div>
  </PageDefaultLayoutTwo>
</template>
