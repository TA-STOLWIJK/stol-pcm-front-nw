<script setup>
import CloseButton from '@/components/button/CloseButton.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTable from "@/components/table/HeaderTable.vue";
import RowTable from "@/components/table/RowTable.vue";
import { useDateFormat } from "@vueuse/core";
import TextOne from "@/components/text/TextOne.vue";

const emit = defineEmits(['closeModal'])
const props = defineProps({
  client: {
    type: Object
  }
})

const exit = async () => {
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
        id="scroll"
      >
        <HeaderOne
          >Laatst verstuurde klanttevredenheidsvragen aan {{ props.client.first_name_client }}
          {{ props.client.last_name_client }}
        </HeaderOne>
        <TextOne v-if="props.client.satis.length < 1">Er zijn nog een eerdere vragenlijsten verstuurd</TextOne>
        <div class="p-1.5 w-full inline-block align-middle" v-if="props.client.satis.length > 0">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
              <tr>
                <HeaderTable>Type</HeaderTable>
                <HeaderTable>Datum verstuurd</HeaderTable>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
              <tr
                v-for="action in props.client.satis"
                :key="action.id"
                class="hover:bg-gray-200 dark:hover:bg-gray-500"
              >
                <RowTable>{{ action.type_contact }}</RowTable>
                <RowTable>{{ action.date_inv_send }}</RowTable>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex justify-end py-3 px-3">
          <CloseButton @click="exit" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
