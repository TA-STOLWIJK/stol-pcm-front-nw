import * as API from '@/services/API'

export default {
  getTeam(teamId) {
    return API.apiClient.get(`/teams/${teamId}`)
  },
  getTeams() {
    return API.apiClient.get(`/teams/`)
  },
  postTeam(payload) {
    return API.apiClient.post(`/teams/`, payload)
  },
  updateTeam(teamId, payload) {
    return API.apiClient.put(`/teams/${teamId}`, payload)
  },
  deleteTeam(teamId) {
    return API.apiClient.delete(`/teams/${teamId}`)
  }
}
