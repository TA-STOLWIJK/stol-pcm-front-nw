import { defineStore } from 'pinia'
import { getError } from '@/utils/helpers'
import UserService from '@/services/UserService'
import { toast } from 'vue3-toastify'

export const useSingleUser = defineStore({
  id: 'userSingleStore',
  state: () => ({
    id: null,
    first_name_user: null,
    last_name_user: null,
    name: null,
    email: null,
    team_id: null,
    password: null,
    gender_user: null,
    telephone_user: null,
    function_user: null,
    photo_a_user: null,
    photo_b_user: null,
    photo_c_user: null,
    photo_d_user: null,
    two_factor_code: null,
    two_factor_expires_at: null,
    type: null,
    is_admin: false,
    is_superuser: false,
    initial_user: null,
    title_front_user: null,
    title_back_user: null,
    working_from_user: null,
    social_a_user: null,
    social_b_user: null,
    social_c_user: null,
    social_d_user: null,
    social_e_user: null,
    department_user: null,
    telephone_fixed_user: null,
    error: null,
    loading: false
  }),

  actions: {
    async getUser(userId) {
      try {
        this.loading = true
        const response = await UserService.getUser(userId)
        this.id = response.data.data.id
        this.first_name_user = response.data.data.first_name_user
        this.last_name_user = response.data.data.last_name_user
        this.name = response.data.data.name
        this.email = response.data.data.email
        this.team_id = response.data.data.team_id
        this.password = response.data.data.password
        this.gender_user = response.data.data.gender_user
        this.telephone_user = response.data.data.telephone_user
        this.function_user = response.data.data.function_user
        this.photo_a_user = response.data.data.photo_a_user
        this.photo_b_user = response.data.data.photo_b_user
        this.photo_c_user = response.data.data.photo_c_user
        this.photo_d_user = response.data.data.photo_d_user
        this.two_factor_code = response.data.data.two_factor_code
        this.two_factor_expires_at = response.data.data.two_factor_expires_at
        this.type = response.data.data.type
        this.is_admin = response.data.data.is_admin
        this.is_superuser = response.data.data.is_superuser
        this.initial_user = response.data.data.initial_user
        this.title_front_user = response.data.data.title_front_user
        this.title_back_user = response.data.data.title_back_user
        this.working_from_user = response.data.data.working_from_user
        this.social_a_user = response.data.data.social_a_user
        this.social_b_user = response.data.data.social_b_user
        this.social_c_user = response.data.data.social_c_user
        this.social_d_user = response.data.data.social_d_user
        this.social_e_user = response.data.data.social_e_user
        this.department_user = response.data.data.department_user
        this.telephone_fixed_user = response.data.data.telephone_fixed_user
        this.loading = false
        return response
      } catch (error) {
        this.user = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async storeUser() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          first_name_user: this.first_name_user,
          last_name_user: this.last_name_user,
          team_id: this.team_id,
          name: this.name,
          email: this.email,
          password: 'password',
          gender_user: this.gender_user,
          telephone_user: this.telephone_user,
          function_user: this.function_user,
          photo_a_user: this.photo_a_user,
          photo_b_user: this.photo_b_user,
          photo_c_user: this.photo_c_user,
          photo_d_user: this.photo_d_user,
          two_factor_code: this.two_factor_code,
          two_factor_expires_at: this.two_factor_expires_at,
          type: this.type,
          is_admin: this.is_admin,
          is_superuser: this.is_superuser,
          initial_user: this.initial_user,
          title_front_user: this.title_front_user,
          title_back_user: this.title_back_user,
          working_from_user: this.working_from_user,
          social_a_user: this.social_a_user,
          social_b_user: this.social_b_user,
          social_c_user: this.social_c_user,
          social_d_user: this.social_d_user,
          social_e_user: this.social_e_user,
          department_user: this.department_user,
          telephone_fixed_user: this.telephone_fixed_user
        }
        await UserService.postUser(payload)
        toast.success('Uw data is veilig opgeslagen')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },
    async updateUser() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          first_name_user: this.first_name_user,
          last_name_user: this.last_name_user,
          team_id: this.team_id,
          name: this.name,
          email: this.email,
          gender_user: this.gender_user,
          telephone_user: this.telephone_user,
          function_user: this.function_user,
          photo_a_user: this.photo_a_user,
          photo_b_user: this.photo_b_user,
          photo_c_user: this.photo_c_user,
          photo_d_user: this.photo_d_user,
          two_factor_code: this.two_factor_code,
          two_factor_expires_at: this.two_factor_expires_at,
          type: this.type,
          is_admin: this.is_admin,
          is_superuser: this.is_superuser,
          initial_user: this.initial_user,
          title_front_user: this.title_front_user,
          title_back_user: this.title_back_user,
          working_from_user: this.working_from_user,
          social_a_user: this.social_a_user,
          social_b_user: this.social_b_user,
          social_c_user: this.social_c_user,
          social_d_user: this.social_d_user,
          social_e_user: this.social_e_user,
          department_user: this.department_user,
          telephone_fixed_user: this.telephone_fixed_user
        }

        await UserService.updateUser(this.id, payload)
        toast.success('De data van deze user is gewijzigd')
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
        await UserService.deleteUser(userId)
        toast.success('De data van deze gebruiker is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error(
          'De gebruiker kan niet verwijderd worden. Er zijn nog klanten aan deze gebruiker gekoppeld.'
        )
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefault() {
      this.id = null
      this.first_name_user = null
      this.last_name_user = null
      this.name = null
      this.email = null
      this.team_id = null
      this.password = null
      this.gender_user = null
      this.telephone_user = null
      this.function_user = null
      this.photo_a_user = null
      this.photo_b_user = null
      this.photo_c_user = null
      this.photo_d_user = null
      this.two_factor_code = null
      this.two_factor_expires_at = null
      this.type = null
      this.is_admin = false
      this.is_superuser = false
      this.initial_user = null
      this.title_front_user = null
      this.title_back_user = null
      this.working_from_user = null
      this.social_a_user = null
      this.social_b_user = null
      this.social_c_user = null
      this.social_d_user = null
      this.social_e_user = null
      this.department_user = null
      this.telephone_fixed_user = null
      this.error = null
      this.loading = false
    }
  },
  getters: {}
})
