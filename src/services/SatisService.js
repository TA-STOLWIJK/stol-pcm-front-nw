import * as API from "@/services/API";
export default {
  getClient(clientId) {
    return API.apiClient.get(`/satis/${clientId}`);
  },
  getClients() {
    return API.apiClient.get(`/satis/`);
  },
  paginateUsers(link) {
    return API.apiClient.get(link)
  },
  getClientsSearch(query) {
    return API.apiClient.get('/searchSatis', {
      params: {
        query: query
      }
    })
  },
  satisInvitation(payload) {
    return API.apiClient.post(`/satisInv/`, payload);
  },
};
