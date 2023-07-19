import axios from 'axios'
import * as API from '@/services/API'
export const authClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: true // required to handle the CSRF token
})

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    if (
      error.response &&
      [401, 419].includes(error.response.status)
      // &&
      // store.getters["auth/authUser"] &&
      // !store.getters["auth/guest"]
    ) {
      console.log('een error')
      // store.dispatch("auth/logout");
    }
    console.log('error2')
    return Promise.reject(error)
  }
)

export default {
  async login(payload) {
    await authClient.get('/sanctum/csrf-cookie')
    return authClient.post('/login', payload)
  },
  twofa(payload) {
    return API.apiClient.post('/request2fa', payload)
  },
  checktwofactor(payload) {
    return API.apiClient.post('/request2fatwo', payload)
  },

  async logout() {
    await API.apiClient.post("logout2fa");
    return authClient.post("/logout");
  },
  // async forgotPassword(payload) {
  //   await authClient.get("/sanctum/csrf-cookie");
  //   return authClient.post("/forgot-password", payload);
  // },
  getAuthUser() {
    return authClient.get('/api/auth/auth')
  }
  // async resetPassword(payload) {
  //   await authClient.get("/sanctum/csrf-cookie");
  //   return authClient.post("/reset-password", payload);
  // },
  // updatePassword(payload) {
  //   return authClient.put("/user/password", payload);
  // },
  // async registerUser(payload) {
  //   await authClient.get("/sanctum/csrf-cookie");
  //   return authClient.post("/register", payload);
  // },
  // sendVerification(payload) {
  //   return authClient.post("/email/verification-notification", payload);
  // },
  // updateUser(payload) {
  //   return authClient.put("/user/profile-information", payload);
  // },
}
