import TeamService from '@/services/TeamService'
import { getError } from '@/utils/helpers'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

export const useSingleTeam = defineStore({
  id: 'teamSingleStore',
  state: () => ({
    id: null,
    team_name: null,
    company_name_team: null,
    adress_team: null,
    zip_code_team: null,
    place_team: null,
    telephone_team: null,
    email_info_team: null,
    website_team: null,
    po_box_team: null,
    po_box_place_team: null,
    po_box_zip_team: null,
    error: null,
    loading: false
  }),

  actions: {
    async getTeam(teamId) {
      try {
        this.loading = true
        const response = await TeamService.getTeam(teamId)
        this.id = response.data.data.id
        this.team_name = response.data.data.team_name
        this.company_name_team = response.data.data.company_name_team
        this.adress_team = response.data.data.adress_team
        this.zip_code_team = response.data.data.zip_code_team
        this.place_team = response.data.data.place_team
        this.telephone_team = response.data.data.telephone_team
        this.email_info_team = response.data.data.email_info_team
        this.website_team = response.data.data.website_team
        this.po_box_team = response.data.data.po_box_team
        this.po_box_place_team = response.data.data.po_box_place_team
        this.po_box_zip_team = response.data.data.po_box_zip_team
        this.loading = false
        return response
      } catch (error) {
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async storeTeam() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          team_name: this.team_name,
          company_name_team: this.company_name_team,
          adress_team: this.adress_team,
          zip_code_team: this.zip_code_team,
          place_team: this.place_team,
          telephone_team: this.telephone_team,
          email_info_team: this.email_info_team,
          website_team: this.website_team,
          po_box_team: this.po_box_team,
          po_box_zip_team: this.po_box_zip_team,
          po_box_place_team: this.po_box_place_team
        }
        await TeamService.postTeam(payload)
        toast.success('Uw data is veilig opgeslagen')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },
    async updateTeam() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          team_name: this.team_name,
          company_name_team: this.company_name_team,
          adress_team: this.adress_team,
          zip_code_team: this.zip_code_team,
          place_team: this.place_team,
          telephone_team: this.telephone_team,
          email_info_team: this.email_info_team,
          website_team: this.website_team,
          po_box_team: this.po_box_team,
          po_box_zip_team: this.po_box_zip_team,
          po_box_place_team: this.po_box_place_team
        }

        await TeamService.updateTeam(this.id, payload)
        toast.success('De data van dit team is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async delete(teamId) {
      try {
        this.saving = true
        await TeamService.deleteTeam(teamId)
        toast.success('De data van dit team is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error(
          'Dit team kan niet verwijderd worden. Er zijn nog gebruikers aan dit team gekoppeld.'
        )
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefault() {
      this.id = null
      this.team_name = null
      this.company_name_team = null
      this.adress_team = null
      this.zip_code_team = null
      this.place_team = null
      this.telephone_team = null
      this.email_info_team = null
      this.website_team = null
      this.po_box_team = null
      this.po_box_place_team = null
      this.po_box_zip_team = null
      this.error = null
      this.loading = false
    }
  },
  getters: {}
})
