<script setup>
import EditButton from '@/components/button/EditButton.vue'
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import { useLinks } from '@/stores/admin/linkStore'
import LinkEditModal from '@/views/admin/LinkEditModal.vue'
import { onMounted, ref } from 'vue'

const linkStore = useLinks()

const showModal = ref(false)

const editLink = async () => {
  showModal.value = !showModal.value
}
onMounted(() => {
  linkStore.getLinks()
})
</script>

<template>
  <PageDefaultLayout>
    <HeaderOne>Links</HeaderOne>
    <LinkEditModal v-if="showModal" @closeModal="showModal = false" />
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="flex justify-end py-3 px-3">
          <EditButton @click="editLink" />
        </div>
        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable class="w-1/5">Naam</HeaderTable>
                  <HeaderTable>Link</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Personal QuickScans</RowTable>
                  <RowTable>{{ linkStore.pqs_a }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Klant tevredenheid</RowTable>
                  <RowTable>{{ linkStore.pqs_b }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Risk assessment</RowTable>
                  <RowTable>{{ linkStore.pqs_c }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Een vierde</RowTable>
                  <RowTable>{{ linkStore.pqs_d }}</RowTable>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </PageDefaultLayout>
</template>
