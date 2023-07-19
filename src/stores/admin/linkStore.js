
import LinkService from '@/services/admin/LinkService'
import { getError } from '@/utils/helpers'
import { defineStore } from 'pinia'
import { toast } from "vue3-toastify";

export const useLinks = defineStore({
  id: 'linkStore',
  state: () => ({
    pqs_a: null,
    pqs_b: null,
    pqs_c: null,
    pqs_d: null,
    error: null,
    loading: false
  }),

  actions: {
    async getLinks() {
      try {
        this.loading = true
        const response = await LinkService.getMains(1)
        this.pqs_a = response.data.data.pqs_a
        this.pqs_b = response.data.data.pqs_b
        this.pqs_c = response.data.data.pqs_c
        this.pqs_d = response.data.data.pqs_d
        this.loading = false
        return response
      } catch (error) {
        this.pqs_a = null
        this.pqs_b = null
        this.pqs_c = null
        this.pqs_d = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async updateLinks() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          pqs_a: this.pqs_a,
          pqs_b: this.pqs_b,
          pqs_c: this.pqs_c,
          pqs_d: this.pqs_d,
        }

        await LinkService.updateMain(1, payload)
        toast.success('De links zijn gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

  },
  getters: {}
})
