import ClientService from '@/services/ClientService'
import { getError } from '@/utils/helpers'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

export const useSingleClient = defineStore({
  id: 'clientSingleStore',
  state: () => ({
    id: null,
    team_id: null,
    user_id: null,
    gender_client: null,
    first_name_client: null,
    last_name_client: null,
    place_client: null,
    rel_number: null,
    email_client: null,
    sms_client: true,
    phone_number_client: null,
    style_client: null,
    company_name_client: null,
    profile_client: null,
    branch_client: null,
    size_client: null,
    ownership_client: null,
    error: null,
    loading: false
  }),

  actions: {
    async getClient(clientId) {
      try {
        this.loading = true
        const response = await ClientService.getClient(clientId)
        this.id = response.data.data.id
        this.user_id = response.data.data.user_id
        this.team_id = response.data.data.team_id
        this.gender_client = response.data.data.gender_client
        this.first_name_client = response.data.data.first_name_client
        this.last_name_client = response.data.data.last_name_client
        this.place_client = response.data.data.place_client
        this.rel_number = response.data.data.rel_number
        this.email_client = response.data.data.email_client
        this.sms_client = response.data.data.sms_client
        this.phone_number_client = response.data.data.phone_number_client
        this.style_client = response.data.data.style_client
        this.company_name_client = response.data.data.company_name_client
        this.profile_client = response.data.data.profile_client
        this.branch_client = response.data.data.branch_client
        this.size_client = response.data.data.size_client
        this.ownership_client = response.data.data.ownership_client
        this.loading = false
        return response
      } catch (error) {
        this.user = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async storeClient() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          user_id: this.user_id,
          first_name_client: this.first_name_client,
          last_name_client: this.last_name_client,
          gender_client: this.gender_client,
          place_client: this.place_client,
          rel_number: this.rel_number,
          email_client: this.email_client,
          sms_client: this.sms_client,
          phone_number_client: this.phone_number_client,
          company_name_client: this.company_name_client,
          profile_client: this.profile_client,
          branch_client: this.branch_client,
          size_client: this.size_client,
          ownership_client: this.ownership_client,
          style_client: this.style_client
        }
        await ClientService.postClient(payload)
        toast.success('Uw data is veilig opgeslagen')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },
    async updateClient() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          user_id: this.user_id,
          team_id: this.team_id,
          first_name_client: this.first_name_client,
          last_name_client: this.last_name_client,
          gender_client: this.gender_client,
          place_client: this.place_client,
          rel_number: this.rel_number,
          email_client: this.email_client,
          sms_client: this.sms_client,
          phone_number_client: this.phone_number_client,
          company_name_client: this.company_name_client,
          profile_client: this.profile_client,
          branch_client: this.branch_client,
          size_client: this.size_client,
          ownership_client: this.ownership_client,
          style_client: this.style_client
        }

        await ClientService.updateClient(this.id, payload)
        toast.success('De data van deze klant is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async delete(userId) {
      try {
        this.saving = true
        await ClientService.deleteClient(userId)
        toast.success('De data van deze klant is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error(
          'Deze klant kan niet verwijderd worden. Er zijn nog personal quickscans  aan deze klant gekoppeld.'
        )
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefault() {
      this.id = null
      this.team_id = null
      this.user_id = null
      this.gender_client = null
      this.first_name_client = null
      this.last_name_client = null
      this.place_client = null
      this.rel_number = null
      this.email_client = null
      this.sms_client = true
      this.phone_number_client = null
      this.style_client = null
      this.company_name_client = null
      this.profile_client = null
      this.branch_client = null
      this.size_client = null
      this.ownership_client = null
      this.error = null
      this.loading = false
      this.error = null
      this.loading = false
    }
  },
  getters: {}
})
