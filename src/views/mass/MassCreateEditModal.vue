<script setup>
import CloseButton from '@/components/button/CloseButton.vue'
import SaveButton from '@/components/button/SaveButton.vue'
import DividerTable from '@/components/table/DividerTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import branch from '@/json/branch.json'
import scans from '@/json/mass/scans.json'
import ownership from '@/json/ownership.json'
import profile from '@/json/profile.json'
import size from '@/json/size.json'
import { useSingleMass } from '@/stores/mass/massSingleStore'
import { useMass } from '@/stores/mass/massStore'
import { useTeams } from '@/stores/team/teamStore'
import { onMounted, ref } from "vue";
import { useSelectUser } from '@/stores/user/userSelectStore'
const massStore = useMass()
const userSelectStore = useSelectUser()
const massSingleStore = useSingleMass()
const teamStore = useTeams()
const myForm = ref(null)

const props = defineProps({
  editing: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['closeModal'])
const saveNew = async () => {
  await massSingleStore.storeAction()
  if (massSingleStore.error === null) {
    await massSingleStore.setDefault()
    await massStore.getActions()
    emit('closeModal')
  } else {
    console.log('we have a problem')
  }
}
function submitForm() {
  const node = myForm.value.node
  node.submit()
}
const saveExisting = async () => {
  massSingleStore.error = null
  await massSingleStore.updateAction()
  if (massSingleStore.error === null) {
    await massSingleStore.setDefault()
    await massStore.getActions()
    emit('closeModal')
  } else {
    console.log('we have a problem')
  }
}
const exit = async () => {
  await massSingleStore.setDefault()
  await emit('closeModal')
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
      >
        <HeaderOne v-show="props.editing">Maak een nieuwe collectieve actie aan</HeaderOne>
        <HeaderOne v-show="!props.editing"
          >Pas gegevens aan van: {{ massSingleStore.name_action }}
        </HeaderOne>

        <HeaderTwo>Algemeen</HeaderTwo>
        <FormKit
          type="form"
          :actions="false"
          ref="myForm"
          @submit="props.editing ? saveNew() : saveExisting()"
        >
          <div class="grid grid-cols-4 gap-4">
            <FormKit
              type="text"
              label="Naam collectieve actie"
              v-model="massSingleStore.massData.name_action"
              validation="required|length:1,100"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />

            <FormKit
              type="select"
              label="Selecteer een QuickScan"
              v-model="massSingleStore.massData.name_scan"
              validation="required"
              placeholder="Selecteer"
              :options="scans"
              outer-class="col-span-2"
            />
          </div>
          <DividerTable />
          <HeaderTwo>Selectie op basis van klantprofiel</HeaderTwo>
          <div class="grid grid-cols-4 gap-4">
            <FormKit
              v-model="massSingleStore.massData.sel_branch"
              type="checkbox"
              label="Branch"
              :options="branch"
              validation="required|min:1"
            />
            <FormKit
              v-model="massSingleStore.massData.sel_size"
              type="checkbox"
              label="Omvang"
              :options="size"
              validation="required|min:1"
            />
            <FormKit
              v-model="massSingleStore.massData.sel_owner"
              type="checkbox"
              label="Eigendom"
              :options="ownership"
              validation="required|min:1"
            />
            <FormKit
              v-model="massSingleStore.massData.sel_profile"
              type="checkbox"
              label="Profiel"
              :options="profile"
              validation="required|min:1"
            />
          </div>
          <DividerTable />
          <HeaderTwo>Selectie van teams en gebruikers</HeaderTwo>
          <div class="grid grid-cols-4 gap-4">
            <FormKit
              v-model="massSingleStore.massData.sel_teams"
              type="checkbox"
              label="Teams"
              :options="teamStore.allTeams"
              validation="required|min:1"
              outer-class="col-span-2"
            />
            <FormKit
              v-model="massSingleStore.massData.sel_users"
              type="checkbox"
              label="Relatiemanagers"
              :options="userSelectStore.users"
              validation="required|min:1"
              outer-class="col-span-2"
            />
          </div>

          <div v-show="massSingleStore.error" class="flex justify-end text-red-500 text-xl">
            {{ massSingleStore.error }}
          </div>
        </FormKit>
        <div class="flex justify-end py-3 px-3">
          <CloseButton @click="exit" />
          <SaveButton @click="submitForm" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
