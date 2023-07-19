<script setup>
import CloseButton from '@/components/button/CloseButton.vue'
import SaveButton from '@/components/button/SaveButton.vue'
import DividerTable from '@/components/table/DividerTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import authOne from '@/json/autOne.json'
import gender from '@/json/gender.json'
import { useTeams } from '@/stores/team/teamStore'
import { useSingleUser } from '@/stores/user/userSingleStore'
import { useUser } from '@/stores/user/userStore'
import { onMounted, ref } from 'vue'
import { toast } from 'vue3-toastify'

const userSingleStore = useSingleUser()
const teamStore = useTeams()
const myForm = ref(null)

const userStore = useUser()

const props = defineProps({
  editing: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['closeModal'])
const saveNew = async () => {
  await userSingleStore.storeUser()
  if (userSingleStore.error === null) {
    await userSingleStore.setDefault()
    await userStore.getUsers(1)
    emit('closeModal')
  } else {
    console.log('we have a problem')
  }
}
const saveExisting = async () => {
  userSingleStore.error = null
  await userSingleStore.updateUser()
  if (userSingleStore.error === null) {
    await userSingleStore.setDefault()
    await userStore.getUsers(1)
    emit('closeModal')
  } else {
    console.log('we have a problem')
  }
}
const exit = () => {
  toast.info('Uw rapport wordt nu opgemaakt', {
    position: toast.POSITION.TOP_CENTER
  })
  emit('closeModal')
  console.log('this exit also works')
}
function submitForm() {
  // retrieve the core node (several ways to do this):
  const node = myForm.value.node
  // submit the form!
  node.submit()
}
onMounted(() => {
  teamStore.getTeams()
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
        <HeaderOne v-show="props.editing">Maak een nieuwe gebruiker aan</HeaderOne>
        <HeaderOne v-show="!props.editing"
          >Pas gegevens aan van: {{ userSingleStore.first_name_user }}
          {{ userSingleStore.last_name_user }}</HeaderOne
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
              type="select"
              label="Aanhef"
              name="aanhef"
              v-model="userSingleStore.gender_user"
              placeholder="Aanhef"
              validation="required"
              validation-visibility="dirty"
              :options="gender"
            />
            <FormKit
              type="text"
              label="Voornaam"
              v-model="userSingleStore.first_name_user"
              validation="required|length:1,20"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Initialen"
              v-model="userSingleStore.initial_user"
              validation="required|length:1,20"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Titulatuur voor"
              v-model="userSingleStore.title_front_user"
              validation="length:1,20"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Titulatuur achter"
              v-model="userSingleStore.title_back_user"
              validation="length:1,20"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Achternaam"
              v-model="userSingleStore.last_name_user"
              validation="required"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Gebruikersnaam"
              v-model="userSingleStore.name"
              validation="required"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Telefoonnummer primair"
              v-model="userSingleStore.telephone_user"
              validation="required"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Telefoonnummer vast"
              v-model="userSingleStore.telephone_fixed_user"
              validation="length:1,20"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Email"
              v-model="userSingleStore.email"
              validation="required|email"
              validation-visibility="dirty"
              outer-class="col-span-3"
            />
            <FormKit
              type="text"
              label="Functie"
              v-model="userSingleStore.function_user"
              validation="required"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Werkend vanuit"
              v-model="userSingleStore.working_from_user"
              validation="length:1,50"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Afdeling"
              v-model="userSingleStore.department_user"
              validation="length:1,50"
              validation-visibility="dirty"
            />
          </div>
          <DividerTable />
          <HeaderTwo>Team</HeaderTwo>
          <FormKit
            type="select"
            label="Team"
            v-model="userSingleStore.team_id"
            placeholder="Selecteer team"
            validation="required"
            validation-visibility="dirty"
            :options="teamStore.allTeams"
          />
          <DividerTable />
          <HeaderTwo>Autorisaties</HeaderTwo>
          <div class="grid grid-cols-3 gap-4">
            <FormKit
              type="radio"
              label="Autorisatie 1"
              v-model="userSingleStore.type"
              validation="required"
              validation-visibility="dirty"
              :options="authOne"
              outer-class="row-span-3"
            />
            <FormKit
              type="checkbox"
              label="Is Admin"
              v-model="userSingleStore.is_admin"
              outer-class="col-span-2"
            />
            <FormKit
              type="checkbox"
              label="Is SuperUser"
              v-model="userSingleStore.is_superuser"
              outer-class="col-span-2"
            />
          </div>
          <DividerTable />
          <HeaderTwo>Foto's</HeaderTwo>
          <div class="grid grid-cols-3 gap-4">
            <FormKit
              type="text"
              label="Foto A"
              v-model="userSingleStore.photo_a_user"
              validation="url"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Foto B"
              v-model="userSingleStore.photo_b_user"
              validation="url"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Foto C"
              v-model="userSingleStore.photo_c_user"
              validation="url"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Foto D"
              v-model="userSingleStore.photo_d_user"
              validation="url"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
          </div>
          <DividerTable />
          <HeaderTwo>Social</HeaderTwo>
          <div class="grid grid-cols-3 gap-4">
            <FormKit
              type="text"
              label="Social A"
              v-model="userSingleStore.social_a_user"
              validation="url"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Social B"
              v-model="userSingleStore.social_b_user"
              validation="url"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Social C"
              v-model="userSingleStore.social_c_user"
              validation="url"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Social D"
              v-model="userSingleStore.social_d_user"
              validation="url"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
            <FormKit
              type="text"
              label="Social E"
              v-model="userSingleStore.social_e_user"
              validation="url"
              validation-visibility="dirty"
              outer-class="col-span-2"
            />
          </div>
          <div v-show="userSingleStore.error" class="flex justify-end text-red-500 text-xl">
            {{ userSingleStore.error }}
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

<style scoped>

</style>
