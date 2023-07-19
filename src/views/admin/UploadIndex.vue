<script setup>
import ExcelButton from '@/components/button/ExcelButton.vue'
import UploadButton from '@/components/button/UploadButton.vue'
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import ClientService from '@/services/ClientService'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import DownLoadButton from "@/components/button/DownLoadButton.vue";

const currentFile = ref(undefined)

const selectFile = (e) => {
  currentFile.value = e.target.files[0]
}
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const download1 = () => {
  const link = document.createElement('a')
  link.href = '../files/upload_klanten.xlsx'
  link.setAttribute('download', 'upload_klanten.xlsx')
  link.click()
}

const download2 = () => {
  const link = document.createElement('a')
  link.href = '../files/upload_klanten.pdf'
  link.setAttribute('download', 'Upload_klanten.pdf')
  link.click()
}

const uploadFile = async () => {
  const payload = {}
  const formdata = new FormData()
  formdata.append('file', currentFile.value)
  payload.file = formdata
  console.log(payload.file)
  try {
    await ClientService.uploadClients(payload)
    toast.success('De klanten zijn opgevoerd')
    await sleep(3000)
    currentFile.value = undefined
    location.reload()
  } catch {
    toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
  }
}
</script>

<template>
  <PageDefaultLayout>
    <HeaderOne>Uploads</HeaderOne>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable class="w-1/5">Type</HeaderTable>
                  <HeaderTable>Upload</HeaderTable>
                  <HeaderTable>Verwerk</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Klanten</RowTable>
                  <RowTable
                    ><div class="mb-3">
                      <input
                        class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        id="formFile"
                        @change="selectFile"
                      /></div
                  ></RowTable>
                  <RowTable><UploadButton v-if="currentFile" @click="uploadFile" /></RowTable>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <HeaderOne>Bestanden</HeaderOne>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
              <tr>
                <HeaderTable class="w-1/5">Type</HeaderTable>
                <HeaderTable>Download</HeaderTable>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                <RowTable>Klanten Excel</RowTable>
                <RowTable><DownLoadButton @click="download1" /></RowTable>
              </tr>
              <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                <RowTable>Klanten PDF</RowTable>
                <RowTable><DownLoadButton @click="download2" /></RowTable>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </PageDefaultLayout>
</template>
