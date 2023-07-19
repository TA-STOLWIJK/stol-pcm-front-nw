<script setup>
import CloseButton from '@/components/button/CloseButton.vue'
import SaveButton from '@/components/button/SaveButton.vue'
import DividerTable from '@/components/table/DividerTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import { ref } from "vue";



import { useLinks } from '@/stores/admin/linkStore'
const linkStore = useLinks()
const myForm = ref(null)
const emit = defineEmits(['closeModal'])

function submitForm() {
  const node = myForm.value.node
  node.submit()
}
const saveExisting = async () => {
  linkStore.error = null
  await linkStore.updateLinks()
  if (linkStore.error === null) {
    await linkStore.getLinks()
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

        <HeaderOne
          >Pas links aan
        </HeaderOne>

        <HeaderTwo>Algemeen</HeaderTwo>
        <FormKit type="form" ref="myForm" :actions="false" @submit="saveExisting()">
          <div class="grid grid-cols-2 gap-4">
            <FormKit
              type="text"
              label="Personal QuickScans"
              v-model="linkStore.pqs_a"
              validation="required|url"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Klant tevredenheid"
              v-model="linkStore.pqs_a"
              validation="required|url"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Risk Assessment"
              v-model="linkStore.pqs_c"
              validation="required|url"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="Een een vierde"
              v-model="linkStore.pqs_d"
              validation="required|url"
              validation-visibility="dirty"
            />
          </div>
          <DividerTable />


          <div v-show="linkStore.error" class="flex justify-end text-red-500 text-xl">
            {{ linkStore.error }}
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
