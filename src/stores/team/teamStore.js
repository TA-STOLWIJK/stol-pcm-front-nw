import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import TeamService from '@/services/TeamService'

export const useTeams = defineStore({
  id: 'teamStore',
  state: () => ({
    teams: [
      {
        id: null,
        team_name: null,
        place_team: null
      }
    ],
    error: null,
    loading: false
  }),

  actions: {
    async getTeams() {
      try {
        this.loading = true
        const response = await TeamService.getTeams()
        this.teams = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.teams = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    }
  },
  getters: {
    allTeams() {
      return this.teams.map(({ id, team_name }) => ({
        label: team_name,
        value: id
      }))
    }
  }
})
