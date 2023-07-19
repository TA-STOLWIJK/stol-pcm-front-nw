<script setup>
import CloseButton from '@/components/button/CloseButton.vue'
import SaveButton from '@/components/button/SaveButton.vue'
import DividerTable from '@/components/table/DividerTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import TextOne from '@/components/text/TextOne.vue'
import itemsChange from '@/json/change.json'
import editScan from '@/json/editScan.json'
import itemsFormal from '@/json/formal.json'
import { useSingleClient } from '@/stores/client/clientSingleStore'
import { useSingleScanStore } from '@/stores/scans/scanSingleStore'
import { useSelectUser } from '@/stores/user/userSelectStore'
import { useSingleUser } from '@/stores/user/userSingleStore'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const userSingleStore = useSingleUser()

const userSelectStore = useSelectUser()
const clientSingleStore = useSingleClient()
const scanStore = useSingleScanStore()

const myForm = ref(null)
const route = useRoute()
const emit = defineEmits(['closeModal'])
function submitForm() {
  const node = myForm.value.node
  node.submit()
}
const saveExisting = async () => {
  const el = document.getElementById('scroll')
  await el.scrollIntoView()
  scanStore.error = null
  await scanStore.changeScanD()
  if (scanStore.error === null) {
    // await teamSingleStore.setDefault()
    await scanStore.getScanD(route.params.id)
    if (scanStore.scanData.specialist) {
      let specId = scanStore.scanData.spec_id
      await userSingleStore.getUser(specId)
    }
    emit('closeModal')
  } else {
    console.log('we have a problem')
  }
}
const exit = async () => {
  const el = document.getElementById('scroll')
  await el.scrollIntoView()
  emit('closeModal')
}
onMounted(() => {
  userSelectStore.getSelectUser()
})
</script>
<template>
  <div
    class="py-12 bg-gray-100 opacity-95 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
    id="modal"
  >
    <div role="alert" class="container mx-auto w-11/12">
      <div
        class="relative py-8 px-5 md:px-10 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400"
        id="scroll"
      >
        <HeaderOne
          >Pas gegevens aan van: {{ clientSingleStore.first_name_client }}
          {{ clientSingleStore.last_name_client }}
        </HeaderOne>

        <HeaderTwo>Algemeen</HeaderTwo>
        <FormKit type="form" :actions="false" ref="myForm" @submit="saveExisting()">
          <div class="grid grid-cols-4 gap-4">
            <div>
              <HeaderTwo>{{ editScan.kans.header }}</HeaderTwo>
              <TextOne>
                {{ editScan.kans.desc }}
              </TextOne>
            </div>
            <FormKit
              type="radio"
              label="Commerciële kans"
              v-model="scanStore.scanData.opp_user"
              validation="required"
              validation-visibility="dirty"
              :options="itemsChange"
            />
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div>
              <HeaderTwo>{{ editScan.stijl.header }}</HeaderTwo>
              <TextOne>
                {{ editScan.stijl.desc }}
              </TextOne>
            </div>
            <FormKit
              type="radio"
              label="Communicatie"
              v-model="scanStore.scanData.style"
              validation="required"
              validation-visibility="dirty"
              :options="itemsFormal"
            />
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div>
              <HeaderTwo>{{ editScan.herinneringen.header }}</HeaderTwo>
              <TextOne>
                {{ editScan.herinneringen.desc }}
              </TextOne>
            </div>
            <FormKit type="checkbox" label="Herinneringen" v-model="scanStore.scanData.reminderA" />
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div>
              <HeaderTwo>{{ editScan.specialist.header }}</HeaderTwo>
              <TextOne>
                {{ editScan.specialist.desc }}
              </TextOne>
            </div>
            <FormKit
              type="checkbox"
              label="2e relatiemanager of specialist"
              v-model="scanStore.scanData.specialist"
            />
          </div>
          <div class="grid grid-cols-4 gap-4" v-if="scanStore.scanData.specialist">
            <div>
              <HeaderTwo>{{ editScan.specialistName.header }}</HeaderTwo>
              <TextOne>
                {{ editScan.specialistName.desc }}
              </TextOne>
            </div>
            <FormKit
              type="select"
              label="Tweede relatiemanager"
              v-model="scanStore.scanData.spec_id"
              placeholder="Selecteer relatiemanager"
              validation="required"
              validation-visibility="dirty"
              :options="userSelectStore.users"
            />
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div>
              <HeaderTwo>{{ editScan.personalNote.header }}</HeaderTwo>
              <TextOne>
                {{ editScan.personalNote.desc }}
              </TextOne>
            </div>
            <FormKit
              type="checkbox"
              label="Persoonlijke tekst"
              v-model="scanStore.scanData.personalNote"
            />
          </div>
          <div class="grid grid-cols-4 gap-4" v-if="scanStore.scanData.personalNote">
            <div>
              <HeaderTwo>{{ editScan.personalNoteText.header }}</HeaderTwo>
              <TextOne>
                {{ editScan.personalNoteText.desc }}
              </TextOne>
            </div>
            <FormKit
              type="textarea"
              label="Persoonlijke boodschap"
              v-model="scanStore.scanData.personalNoteText"
            />
          </div>
        </FormKit>

        <div v-show="scanStore.error" class="flex justify-end text-red-500 text-xl">
          {{ scanStore.error }}
        </div>
        <div class="flex justify-end py-3 px-3">
          <CloseButton @click="exit" />
          <SaveButton @click="submitForm" />
        </div>
        <DividerTable />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
