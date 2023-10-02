<script setup>
import itemsFormal from '@/json/formal.json'
import CloseButton from '@/components/button/CloseButton.vue'
import SaveButton from '@/components/button/SaveButton.vue'
import DividerTable from '@/components/table/DividerTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import branch from '@/json/branch.json'
import genderClient from '@/json/genderClient.json'
import ownerShip from '@/json/ownership.json'
import profile from '@/json/profile.json'
import size from '@/json/size.json'
import cyclus from '@/json/cyclus.json'
import kind from '@/json/kind.json'
import { useSingleClient } from '@/stores/client/clientSingleStore'
import { useClients } from '@/stores/client/clientStore'
import { useTeams } from '@/stores/team/teamStore'
import { useSelectUser } from '@/stores/user/userSelectStore'
import { onMounted, ref } from 'vue'
import { toast } from 'vue3-toastify'

const clientsStore = useClients()
const clientSingleStore = useSingleClient()
const teamStore = useTeams()
const myForm = ref(null)

const userSelectStore = useSelectUser()

const props = defineProps({
  editing: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['closeModal'])
const saveNew = async () => {
  const el = document.getElementById('scroll')
  await el.scrollIntoView()
  await clientSingleStore.storeClient()
  if (clientSingleStore.error === null) {
    await clientSingleStore.setDefault()
    clientsStore.query = null
    await clientsStore.getClients(1)
    emit('closeModal')
  } else {
    console.log('we have a problem')
  }
}
const saveExisting = async () => {
  const el = document.getElementById('scroll')
  await el.scrollIntoView()
  clientsStore.query = null
  clientSingleStore.error = null
  await clientSingleStore.updateClient()
  if (clientSingleStore.error === null) {
    await clientSingleStore.setDefault()
    emit('closeModal')
    location.reload()
  } else {
    console.log('we have a problem')
  }
}
const exit = async () => {
  clientsStore.query = null
  const el = document.getElementById('scroll')
  await el.scrollIntoView()
  toast.info('Wijzigingen worden niet opgeslagen')
  emit('closeModal')
  location.reload()
}
function submitForm() {
  // retrieve the core node (several ways to do this):
  const node = myForm.value.node
  // submit the form!
  node.submit()
}
onMounted(() => {
  teamStore.getTeams()
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
        <HeaderOne v-show="props.editing">Maak een nieuwe gebruiker aan</HeaderOne>
        <HeaderOne v-show="!props.editing"
          >Pas gegevens aan van: {{ clientSingleStore.first_name_client }}
          {{ clientSingleStore.last_name_client }}</HeaderOne
        >

        <HeaderTwo>Algemeen</HeaderTwo>
        <FormKit
          type="form"
          ref="myForm"
          :actions="false"
          @submit="props.editing ? saveNew() : saveExisting()"
        >
          <div class="grid grid-cols-3 gap-4">
            <FormKit
              type="radio"
              label="Aanhef"
              name="aanhef"
              v-model="clientSingleStore.gender_client"
              placeholder="Aanhef"
              validation="required"
              validation-visibility="dirty"
              :options="genderClient"
            />
          </div>
          <div class="grid grid-cols-3 gap-4">
            <FormKit
              type="text"
              label="Voornaam"
              name="voornaam"
              v-model="clientSingleStore.first_name_client"
              validation="required"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Achternaam"
              name="Achternaam"
              v-model="clientSingleStore.last_name_client"
              validation="required"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Plaats"
              name="plaats"
              v-model="clientSingleStore.place_client"
              validation="required"
              validation-visibility="dirty"
            />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <FormKit
              type="text"
              label="Telefoonnummer"
              name="telefoonnummer"
              v-model="clientSingleStore.phone_number_client"
              validation="length:1,20"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Email"
              name="email"
              v-model="clientSingleStore.email_client"
              validation="required:email"
              validation-visibility="dirty"
            />
            <FormKit
              type="radio"
              label="Communicatie"
              v-model="clientSingleStore.style_client"
              validation="required"
              validation-visibility="dirty"
              :options="itemsFormal"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <FormKit
              type="text"
              label="Bedrijfsnaam"
              name="bedrijfsnaam"
              v-model="clientSingleStore.company_name_client"
              validation="required"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Relatienummer"
              name="relatienummer"
              v-model="clientSingleStore.rel_number"
              validation="required"
              validation-visibility="dirty"
            />
          </div>
          <DividerTable />
          <HeaderTwo>Relatiemanager</HeaderTwo>
          <FormKit
            type="select"
            label="Relatiemanager"
            v-model="clientSingleStore.user_id"
            placeholder="Selecteer gebruiker"
            validation="required"
            validation-visibility="dirty"
            :options="userSelectStore.users"
          />
          <DividerTable />
          <HeaderTwo>Typering</HeaderTwo>
          <div class="grid grid-cols-4 gap-4">
            <FormKit
              type="radio"
              label="Branch"
              name="branch"
              v-model="clientSingleStore.branch_client"
              validation="required"
              validation-visibility="dirty"
              :options="branch"
            />
            <FormKit
              type="radio"
              label="Eigendom"
              name="eigendom"
              v-model="clientSingleStore.ownership_client"
              validation="required"
              validation-visibility="dirty"
              :options="ownerShip"
            />
            <FormKit
              type="radio"
              label="Bedrijfsomvang"
              name="bedrijfsomvang"
              v-model="clientSingleStore.size_client"
              validation="required"
              validation-visibility="dirty"
              :options="size"
            />
            <FormKit
              type="radio"
              label="Klantindeling"
              name="klantindeling"
              v-model="clientSingleStore.profile_client"
              placeholder="Aanhef"
              validation="required"
              validation-visibility="dirty"
              :options="profile"
            />
            <FormKit
              type="radio"
              label="Levenscyclus"
              name="Levenscyclus"
              v-model="clientSingleStore.cyclus_client"
              placeholder="Cyclus"
              validation="required"
              validation-visibility="dirty"
              :options="cyclus"
            />
            <FormKit
              type="radio"
              label="Soort ondernemer"
              name="Soort ondernemer"
              v-model="clientSingleStore.kind_client"
              placeholder="Soort"
              validation="required"
              validation-visibility="dirty"
              :options="kind"
            />
          </div>
        </FormKit>
        <div v-show="clientSingleStore.error" class="flex justify-end text-red-500 text-xl">
          {{ clientSingleStore.error }}
        </div>
        <div class="flex justify-end py-3 px-3">
          <CloseButton @click="exit" />
          <SaveButton @click="submitForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
