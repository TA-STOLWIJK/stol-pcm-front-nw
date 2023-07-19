import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import MassService from "@/services/mass/MassService";

export const useMass = defineStore({
  id: 'massStore',
  state: () => ({
    actions: [
      {
        id: null,
        name_action: null,
        status_send: false,
        created_at: null,
      }
    ],
    error: null,
    loading: false
  }),

  actions: {
    async getActions() {
      try {
        this.loading = true
        const response = await MassService.getMassActions()
        this.actions = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.actions = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    }
  },
  // getters: {
  //   allTeams() {
  //     return this.teams.map(({ id, team_name }) => ({
  //       label: team_name,
  //       value: id
  //     }))
  //   }
  // }
})
