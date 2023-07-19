<script setup>
import CloseButton from '@/components/button/CloseButton.vue'
import SendButton from '@/components/button/SendButton.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import contact from '@/json/satis/contact.json'
import SatisService from '@/services/SatisService'
import { useSelectUser } from '@/stores/user/userSelectStore'
import { onMounted, ref } from 'vue'
import { toast } from 'vue3-toastify'

const entryDate = ref(new Date().toISOString().substr(0, 10))
const userId = ref(null)
const typeContact = ref(null)
const myForm = ref(null)
const userSelectStore = useSelectUser()
const emit = defineEmits(['closeModal2'])
const props = defineProps({
  client: {
    type: Object
  }
})

const exit = async () => {
  emit('closeModal2')
}

const sendInv = async () => {
  console.log('this works')
  try {
    // this.saving = true
    // this.error = null
    const payload = {
      user_id: props.client.user_id,
      team_id: props.client.team_id,
      client_id: props.client.id,
      contact_id: userId.value,
      type_contact: typeContact.value,
      date_contact: entryDate.value,
    }

    await SatisService.satisInvitation(payload)
    toast.success('De uitnodiging voor deze klant is verstuurd')
    emit('closeModal2')
    location.reload()
  } catch (error) {
    toast.error('Er gaat iets mis!')
    // this.saving = false
    // this.error = getError(error)
  }
}

function submitForm() {
  // retrieve the core node (several ways to do this):
  const node = myForm.value.node
  // submit the form!
  node.submit()
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
          >Verstuur een klanttevredenheidsvragenlijst naar {{ props.client.first_name_client }}
          {{ props.client.last_name_client }}
        </HeaderOne>
        <HeaderTwo>Datum</HeaderTwo>
        <FormKit type="form" ref="myForm" :actions="false" @submit="sendInv()">
          <FormKit
            type="date"
            v-model="entryDate"
            label="Datum contact"
            help="Wanneer was contactmoment met klant"
            validation="required"
            validation-visibility="live"
          />
          <HeaderTwo>Met wie was contact</HeaderTwo>
          <FormKit
            type="select"
            label="Contact"
            v-model="userId"
            placeholder="Selecteer gebruiker"
            validation="required"
            validation-visibility="dirty"
            :options="userSelectStore.users"
          />
          <HeaderTwo>Soort contact</HeaderTwo>
          <FormKit
            type="radio"
            label="Contact"
            name="Contact"
            v-model="typeContact"
            placeholder="Soort contact"
            validation="required"
            validation-visibility="dirty"
            :options="contact"
          />
        </FormKit>
        <div class="flex justify-end py-3 px-3">
          <SendButton @click="submitForm" />
          <CloseButton @click="exit" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
