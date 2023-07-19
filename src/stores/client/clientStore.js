import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import UserService from '@/services/UserService'
import ClientService from "@/services/ClientService";

export const useClients = defineStore({
  id: 'clientsStore',
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
        const response = await ClientService.getClients(pageNumber)
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
        const response = await ClientService.getClientsSearch(this.query)
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
