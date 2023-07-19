<script setup>
import BackButton from '@/components/button/BackButton.vue'
import EditButton from '@/components/button/EditButton.vue'
import InvitationButton from '@/components/button/InvitationButton.vue'
import PdfButton from '@/components/button/PdfButton.vue'
import ResetButton from '@/components/button/ResetButton.vue'
import StatusButton from '@/components/button/StatusButton.vue'
import PageDefaultLayoutTwo from '@/components/mainStyle/PageDefaultLayoutTwo.vue'
import HeaderTableOpp from '@/components/scans/HeaderTableOpp.vue'
import HeaderTableClient from '@/components/scans/HeaderTableScanOptions.vue'
import RemindersVisual from '@/components/scans/RemindersVisual.vue'
import RowTableOpp from '@/components/scans/RowTableOpp.vue'
import RowTableScanOptions from '@/components/scans/RowTableScanOptions.vue'
import StatusVisualScan from '@/components/scans/StatusVisualScan.vue'
import DividerTable from '@/components/table/DividerTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import TextOne from '@/components/text/TextOne.vue'
import useConfirmBeforeDelete from '@/composables/useConfirmBeforeDelete'
import useInvitation from '@/composables/useInvitation'
import usePdfDownload from '@/composables/usePdfDownload'
import ReportFormal from '@/presentations/scan/lscan/reportForm.vue'
import ReportInformal from '@/presentations/scan/lscan/reportInform.vue'
import router from '@/router'
import { useSingleClient } from '@/stores/client/clientSingleStore'
import { useSingleScanStore } from '@/stores/scans/scanSingleStore'
import { useSingleUser } from '@/stores/user/userSingleStore'
import editScan from '@/views/scans/lscan/editScan.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const disAblePdf = ref(false)
const disAblInv = ref(false)

const userSingleStore = useSingleUser()
const clientSingleStore = useSingleClient()

const route = useRoute()
const scanStore = useSingleScanStore()
const showModal = ref(false)
const showStatus = ref(false)

const edit = () => {
  showModal.value = !showModal.value
}
const goBack = () => {
  router.back()
}
const resetData = async () => {
  useConfirmBeforeDelete(
    async () => {
      await scanStore.setDefaultL(route.params.id)
      await scanStore.getScanL(route.params.id)
    },
    { question: `${clientSingleStore.last_name_client}` }
  )
}
const sendInvitation = async () => {
  let whichScan = 'L'
  disAblInv.value = true
  await useInvitation(whichScan, route.params.id)
  disAblInv.value = false
}
const getPdf = async () => {
  let whichPdf = 'L'
  disAblePdf.value = true
  await usePdfDownload(whichPdf, route.params.id)
  disAblePdf.value = false
}

onMounted(async () => {
  await scanStore.getScanL(route.params.id)
  await clientSingleStore.getClient(route.params.id)
  if (scanStore.scanData.specialist) {
    let specId = scanStore.scanData.spec_id
    await userSingleStore.getUser(specId)
  }
})
onUnmounted(() => {
  scanStore.setDefault()
  clientSingleStore.setDefault()
  userSingleStore.setDefault()
})
</script>
<template>
  <PageDefaultLayoutTwo>
    <edit-scan v-if="showModal" @closeModal="showModal = false" />
    <HeaderOne
      >QuickScan familiestatuut AGRO {{ clientSingleStore.first_name_client }}
      {{ clientSingleStore.last_name_client }}</HeaderOne
    >
    <DividerTable />
    <div class="grid grid-cols-3 gap-4">
      <div class="overflow-hidden border rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <HeaderTableOpp />
          <tbody class="divide-y divide-gray-200"></tbody>
          <RowTableOpp
            :inner-user="scanStore.scanData.opp_user"
            :inner-kans="scanStore.scanData.opp_kans"
            :inner-profile="scanStore.scanData.opp_profile"
          />
        </table>
      </div>
      <div class="overflow-hidden border rounded-lg col-span-2">
        <table class="min-w-full divide-y divide-gray-200">
          <HeaderTableClient />
          <tbody class="divide-y divide-gray-200"></tbody>
          <RowTableScanOptions
            :inner-user="scanStore.scanData.opp_user"
            :inner-style="scanStore.scanData.style"
            :inner-rel-man="scanStore.scanData.specialist"
            :inner-reminder="scanStore.scanData.reminderA"
            :inner-personal-text="scanStore.scanData.personalNote"
          />
        </table>
      </div>
    </div>
    <div class="grid grid-cols-6">
      <div class="col-span-4" />
      <BackButton class="mt-5" @click="goBack" />
      <EditButton class="mt-5" @click="edit" />
    </div>
    <DividerTable />
    <HeaderTwo>Versturen uitnodiging en rapportages</HeaderTwo>
    <div class="overflow-hidden border rounded-lg col-span-2">
      <table class="min-w-full divide-y divide-gray-200">
        <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
          <RowTable>Nodig uit</RowTable>
          <td><InvitationButton @click="sendInvitation" v-if="!disAblInv" /></td>
        </tr>
        <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
          <RowTable>PDF rapportage</RowTable>
          <td><PdfButton @click="getPdf" v-if="!disAblePdf" /></td>
        </tr>
        <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
          <RowTable>Informele PowerPoint</RowTable>
          <td>
            <report-informal
              :dataScan="scanStore.scanData"
              :dataClient="clientSingleStore"
              :dataSpec="userSingleStore"
            />
          </td>
        </tr>
        <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
          <RowTable>Formele PowerPoint</RowTable>
          <td>
            <report-formal
              :dataScan="scanStore.scanData"
              :dataClient="clientSingleStore"
              :dataSpec="userSingleStore"
            />
          </td>
        </tr>
      </table>
    </div>
    <DividerTable />
    <StatusButton @click="showStatus = !showStatus" class="mb-3" />
    <div class="grid grid-cols-2 gap-4" v-if="showStatus">
      <div class="w-full mx-auto lg:max-w-4xl">
        <HeaderTwo>Algemeen</HeaderTwo>
        <StatusVisualScan
          :date-report="scanStore.scanData.date_client_report"
          :date-logged-in="scanStore.scanData.date_client_login"
          :date-start="scanStore.scanData.date_mail_send"
          :status-report="scanStore.scanData.status_c"
          :status-loggend-in="scanStore.scanData.status_b"
          :status-send="scanStore.scanData.status_a"
          :status-no-int="scanStore.scanData.status_f"
        />
      </div>

      <div class="w-full mx-auto lg:max-w-4xl">
        <HeaderTwo>Herinneringen</HeaderTwo>
        <RemindersVisual
          v-if="scanStore.scanData.status_a && scanStore.scanData.reminderA"
          :date-c="scanStore.scanData.date_reminderC_send"
          :date-b="scanStore.scanData.date_reminderB_send"
          :date-a="scanStore.scanData.date_reminderA_send"
          :status-c="scanStore.scanData.status_reminderC_send"
          :status-b="scanStore.scanData.status_reminderB_send"
          :status-a="scanStore.scanData.status_reminderA_send"
        />
        <div v-else>
          <TextOne
            >Herinneringen zijn alleen zichtbaar als QuickScan is gestart en herinneringen zijn
            geactiveerd.</TextOne
          >
        </div>
      </div>
    </div>
    <DividerTable />
    <HeaderTwo>Reset</HeaderTwo>
    <ResetButton @click="resetData" class="mb-3" />
    <DividerTable />
  </PageDefaultLayoutTwo>
</template>
<style></style>
