import UserService from '@/services/UserService'
import { getError } from '@/utils/helpers'
import { defineStore } from 'pinia'

export const useSelectUser = defineStore({
  id: 'userSelectStore',
  state: () => ({
    users: [
      {
        value: null,
        label: null
      }
    ]
  }),

  actions: {
    async getSelectUser() {
      try {
        this.loading = true
        const response = await UserService.getUserSelect()
        this.users = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.user = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async setDefault() {
      this.id = null
      this.first_name_user = null
      this.last_name_user = null
      this.team_id = null
      this.error = null
      this.loading = false
    }
  },
  getters: {}
})
