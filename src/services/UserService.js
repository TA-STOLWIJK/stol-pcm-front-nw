import * as API from '@/services/API'
import * as API2 from '@/services/API2'
export default {
  getUser(userId) {
    return API.apiClient.get(`/users/${userId}`)
  },
  getUsers(page) {
    return API.apiClient.get(`/users/?page=${page}`)
  },
  getUserSelect() {
    return API.apiClient.get(`/userSelect`)
  },
  getUsersSearch(query) {
    return API.apiClient.get('/searchUsers', {
      params: {
        query: query
      }
    })
  },
  paginateUsers(link) {
    return API.apiClient.get(link)
  },
  postUser(payload) {
    return API.apiClient.post(`/users/`, payload)
  },
  updateUser(userId, payload) {
    return API.apiClient.put(`/users/${userId}`, payload)
  },
  deleteUser(userId) {
    return API.apiClient.delete(`/users/${userId}`)
  },
  downloadUsers() {
    return API2.apiClient.post(`/downLoadUsersExcel/`)
  }
}
