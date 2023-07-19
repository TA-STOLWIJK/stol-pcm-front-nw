import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL + '/api',
  withCredentials: true, // required to handle the CSRF token
  responseType: 'blob'
})

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    if (
      error.response &&
      [401, 419].includes(error.response.status) &&
      store.getters['auth/authUser'] &&
      !store.getters['auth/guest']
    ) {
      store.dispatch('auth/logout')
    }
    return Promise.reject(error)
  }
)
