import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import massClientService from "@/services/mass/MassClientService";
export const useMassClient = defineStore({
  id: 'massClientStore',
  state: () => ({
    mclients: [],
    error: null,
    loading: false,
    query: null
  }),

  actions: {
    async getMassClients(iD) {
      try {
        this.loading = true
        const response = await massClientService.getMassClients(iD)
        this.mclients = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.mclients = []
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async setStatus(payload) {
      try {
        this.saving = true
        const response = await massClientService.changeMassClients(payload)
        this.saving = false
        return response
      } catch (error) {
        this.mclients = []
        this.saving = false
        this.error = getError(error)
        return error
      }
    },

  },

})
