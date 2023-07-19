<script setup>
import CloseButton from '@/components/button/CloseButton.vue'
import SaveButton from '@/components/button/SaveButton.vue'
import DividerTable from '@/components/table/DividerTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import { useSingleTeam } from '@/stores/team/teamSingleStore'
import { useTeams } from '@/stores/team/teamStore'
import { ref } from "vue";



const teamSingleStore = useSingleTeam()
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
  await teamSingleStore.storeTeam()
  if (teamSingleStore.error === null) {
    await teamSingleStore.setDefault()
    await teamStore.getTeams()
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
  teamSingleStore.error = null
  await teamSingleStore.updateTeam()
  if (teamSingleStore.error === null) {
    await teamSingleStore.setDefault()
    await teamStore.getTeams()
    emit('closeModal')
  } else {
    console.log('we have a problem')
  }
}
const exit = () => {
  emit('closeModal')
}
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
        <HeaderOne v-show="props.editing">Maak een nieuwe team aan</HeaderOne>
        <HeaderOne v-show="!props.editing"
          >Pas gegevens aan van: {{ teamSingleStore.team_name }}
        </HeaderOne>

        <HeaderTwo>Algemeen</HeaderTwo>
        <FormKit type="form" :actions="false" ref="myForm" @submit="props.editing ? saveNew() : saveExisting()">
          <div class="grid grid-cols-4 gap-4">
            <FormKit
              type="text"
              label="Naam team"
              v-model="teamSingleStore.team_name"
              validation="required|length:1,100"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Bedrijfsnaam"
              v-model="teamSingleStore.company_name_team"
              validation="required|length:1,150"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Adres"
              v-model="teamSingleStore.adress_team"
              validation="required|length:1,150"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Postcode"
              v-model="teamSingleStore.zip_code_team"
              validation="required|length:1,10"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Plaats"
              v-model="teamSingleStore.place_team"
              validation="required|length:1,150"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="e-mail info"
              v-model="teamSingleStore.email_info_team"
              validation="required|email"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Algemeen telefoon"
              v-model="teamSingleStore.telephone_team"
              validation="required|length:1,150"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Website"
              v-model="teamSingleStore.website_team"
              validation="required|length:1,150"
              validation-visibility="dirty"
              outer-class="col-span-3"
            />
          </div>
          <DividerTable />
          <HeaderTwo>Postbus</HeaderTwo>

          <div class="grid grid-cols-3 gap-4">
            <FormKit
              type="text"
              label="Postbus"
              v-model="teamSingleStore.po_box_team"
              validation="length:1,50"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Postcode Postbus"
              v-model="teamSingleStore.po_box_zip_team"
              validation="length:1,50"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Plaats postbus"
              v-model="teamSingleStore.po_box_place_team"
              validation="length:1,50"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />

          </div>

          <div v-show="teamSingleStore.error" class="flex justify-end text-red-500 text-xl">
            {{ teamSingleStore.error }}
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
