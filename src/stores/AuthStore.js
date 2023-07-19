import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import AuthService from '@/services/AuthService'

export const useAuth = defineStore({
  id: 'authStore',
  state: () => ({
    user: null,
    error: null,
    loading: false,
    twoFa: false
  }),

  actions: {
    async login(payload) {
      try {
        await AuthService.login(payload)
        await this.getAuthUser()
        if (this.loggedIn) {
          await AuthService.twofa(payload)
          console.log('yep')
          this.$router.push({ name: 'factor' })
        }
      } catch (error) {
        this.error = getError(error)
      }
    },
    async factor(payload) {
      try {
        const response = await AuthService.checktwofactor(payload)
        this.twoFa = response.data.data.twofa
        if (this.isFactor) {
          this.$router.push({ name: 'clientIndex' })
        } else {
          this.error = 'Dit is niet de juiste code'
        }
      } catch (error) {
        this.error = getError(error)
      }
    },

    async logout() {
      try {
        await AuthService.logout()
        this.user = null
        this.$router.push({ path: '/' })
      } catch (error) {
        this.user = null
        this.error = getError(error)
      }
    },
    async getAuthUser() {
      if (this.user) return this.user;
      try {
        this.loading = true
        const response = await AuthService.getAuthUser()
        this.user = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.user = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    }
  },

  getters: {
    loggedIn: (state) => !!state.user,
    isAdmin: (state) => (state.user ? state.user.isAdmin : false),
    isFactor: (state) => state.twoFa
  }
})

export class useAuthStore {}
