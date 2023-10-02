import { getError } from '@/utils/helpers'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import MassService from "@/services/mass/MassService";
import massService from "@/services/mass/MassService";

export const useSingleMass = defineStore({
  id: 'massSingleStore',
  state: () => ({
    massData: {},
    error: null,
    loading: false
  }),

  actions: {
    async getAction(massId) {
      try {
        this.loading = true
        const response = await MassService.getMassAction(massId)
        this.massData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async storeAction() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          name_action: this.massData.name_action,
          name_scan: this.massData.name_scan,
          sel_branch: this.massData.sel_branch,
          sel_profile: this.massData.sel_profile,
          sel_cyclus: this.massData.sel_cyclus,
          sel_kind: this.massData.sel_kind,
          sel_owner: this.massData.sel_owner,
          sel_size: this.massData.sel_size,
          sel_teams: this.massData.sel_teams,
          sel_users: this.massData.sel_users,
        }
        await MassService.postMassAction(payload)
        toast.success('Uw data is veilig opgeslagen')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },
    async updateAction() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          name_action: this.massData.name_action,
          name_scan: this.massData.name_scan,
          sel_branch: this.massData.sel_branch,
          sel_profile: this.massData.sel_profile,
          sel_owner: this.massData.sel_owner,
          sel_size: this.massData.sel_size,
          sel_cyclus: this.massData.sel_cyclus,
          sel_kind: this.massData.sel_kind,
          sel_teams: this.massData.sel_teams,
          sel_users: this.massData.sel_users,
        }

        await MassService.updateMassAction(this.massData.id, payload)
        toast.success('De data van deze actie is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async delete(massId) {
      try {
        this.saving = true
        await massService.deleteMassAction(massId)
        toast.success('De data van deze collectieve actie is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error(
          'Er gaat iets mis, Probeer nogmaals of neem contact met ons op.'
        )
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefault() {
      this.massData = {}
      this.error = null
      this.loading = false
    }
  },
  getters: {}
})
