import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import SatisService from "@/services/SatisService";
import UserService from "@/services/UserService";

export const useSatis = defineStore({
  id: 'satisStore',
  state: () => ({
    clients: [],
    test: 'a',
    meta: null,
    links: null,
    error: null,
    loading: false,
    query: null,
  }),

  actions: {
    async getClients(pageNumber) {
      try {
        this.loading = true
        const response = await SatisService.getClients(pageNumber)
        this.clients = response.data.data
        this.meta = response.data.meta
        this.links = response.data.links
        this.loading = false
        return response
      } catch (error) {
        this.clients = []
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async getSearch() {
      try {
        this.loading = true
        const response = await SatisService.getClientsSearch(this.query)
        this.clients = response.data.data
        this.meta = response.data.meta
        this.links = response.data.links
        this.loading = false
        return response
      } catch (error) {
        this.clients = []
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async paginateClients(link) {
      try {
        this.loading = true
        const response = await UserService.paginateUsers(link)
        this.clients = response.data.data
        this.meta = response.data.meta
        this.links = response.data.links
        this.loading = false
        return response
      } catch (error) {
        this.clients = []
        this.loading = false
        this.error = getError(error)
        return error
      }
    }
  },
  getters: {
    stateQ: (state) => state.query
  }
})
