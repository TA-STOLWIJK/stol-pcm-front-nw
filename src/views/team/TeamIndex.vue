<script setup>
import CreateButton from '@/components/button/CreateButton.vue'
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import useConfirmBeforeDelete from '@/composables/useConfirmBeforeDelete'
import { useTeams } from '@/stores/team/teamStore'
import { useSingleTeam } from '@/stores/team/teamSingleStore'
import TeamCreateEditModal from '@/views/team/TeamCreateEditModal.vue'
import { onMounted, ref } from 'vue'

const teamStore = useTeams()
const teamSingleStore = useSingleTeam()

const showModal = ref(false)
const isNew = ref(true)

const newTeam = async () => {
  isNew.value = true
  await teamSingleStore.setDefault()
  showModal.value = !showModal.value
}
const editTeam = async (id) => {
  isNew.value = false
  await teamSingleStore.setDefault()
  await teamSingleStore.getTeam(id)
  showModal.value = !showModal.value
}

const deleteTeam = async (team) => {
  useConfirmBeforeDelete(
    async () => {
      await teamSingleStore.delete(team.id)
      await teamStore.getTeams()
    },
    { question: `${team.team_name}` }
  )
}
onMounted(() => {
  teamStore.getTeams()
})
</script>

<template>
  <PageDefaultLayout>
    <HeaderOne>Teams</HeaderOne>
    <TeamCreateEditModal :editing="isNew" v-if="showModal" @closeModal="showModal = false" />
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="flex justify-end py-3 px-3">
          <CreateButton @click="newTeam" />
        </div>

        <div class="p-1.5 w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable class="w-0.5">ID</HeaderTable>
                  <HeaderTable class="w-1/5">Naam team</HeaderTable>
                  <HeaderTable>Plaats team</HeaderTable>
                  <HeaderTable>WIJZIG</HeaderTable>
                  <HeaderTable>VERWIJDER</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="team in teamStore.teams"
                  :key="team.id"
                  class="hover:bg-gray-200 dark:hover:bg-gray-500"
                >
                  <RowTable>{{ team.id }}</RowTable>
                  <RowTable>{{ team.team_name }}</RowTable>
                  <RowTable>{{ team.place_team }}</RowTable>
                  <RowTable>
                    <a
                      class="text-green-500 hover:text-green-700 cursor-pointer"
                      @click="editTeam(team.id)"
                    >
                      Wijzig
                    </a>
                  </RowTable>
                  <RowTable>
                    <a
                      class="text-red-500 hover:text-red-700 cursor-pointer"
                      @click="deleteTeam(team)"
                      >Verwijder</a
                    >
                  </RowTable>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </PageDefaultLayout>
</template>
