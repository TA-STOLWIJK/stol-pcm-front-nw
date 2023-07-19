<script setup>
import ExcelButton from '@/components/button/ExcelButton.vue'
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import useExcelDownload from '@/composables/useExcelDownload'
import DownLoadButton from "@/components/button/DownLoadButton.vue";

const downloadFace = () => {
  let massId = 1
  let whichExcel = 'face'
  useExcelDownload(whichExcel, massId)
}
const downloadPhone = () => {
  let massId = 1
  let whichExcel = 'phone'
  useExcelDownload(whichExcel, massId)
}
const downloadOnline = () => {
  let massId = 1
  let whichExcel = 'online'
  useExcelDownload(whichExcel, massId)
}
const downloadFaceDesc = () => {
  const link = document.createElement('a')
  link.href = '../files/KTV/Beschrijving_KTO_Afspraak.pdf'
  link.setAttribute('download', 'Beschrijving_KTO_Afspraak.pdf')
  link.click()
}

const downloadPhoneDesc = () => {
  const link = document.createElement('a')
  link.href = '../files/KTV/Beschrijving_KTO_Telefoon.pdf'
  link.setAttribute('download', 'Beschrijving_KTO_Telefoon.pdf')
  link.click()
}

const downloadOnlineDesc = () => {
  const link = document.createElement('a')
  link.href = '../files/KTV/Beschrijving_KTO_Online.pdf'
  link.setAttribute('download', 'Beschrijving_KTO_Online.pdf')
  link.click()
}
</script>

<template>
  <PageDefaultLayout>
    <HeaderOne>Rapporten klanttevredenheid</HeaderOne>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable class="w-1/5">Type</HeaderTable>
                  <HeaderTable>Rapportage</HeaderTable>
                  <HeaderTable>Beschrijving</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Gesprek</RowTable>
                  <RowTable><ExcelButton @click="downloadFace" /></RowTable>
                  <RowTable><DownLoadButton @click="downloadFaceDesc" /></RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Telefoon</RowTable>
                  <RowTable><ExcelButton @click="downloadPhone" /></RowTable>
                  <RowTable><DownLoadButton @click="downloadPhoneDesc" /></RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Online</RowTable>
                  <RowTable><ExcelButton @click="downloadOnline" /></RowTable>
                  <RowTable><DownLoadButton @click="downloadOnlineDesc" /></RowTable>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </PageDefaultLayout>
</template>
