import * as API from "@/services/API";
import * as API2 from "@/services/API2";
export default {
  getClient(clientId) {
    return API.apiClient.get(`/clients/${clientId}`);
  },
  getClients() {
    return API.apiClient.get(`/clients/`);
  },
  getClientsSearch(query) {
    return API.apiClient.get('/searchClients', {
      params: {
        query: query
      }
    })
  },
  getClientsMine() {
    return API.apiClient.get(`/clientsMine/`);
  },
  postClient(payload) {
    return API.apiClient.post(`/clients/`, payload);
  },
  updateClient(clientId, payload) {
    return API.apiClient.put(`/clients/${clientId}`, payload);
  },
  deleteClient(clientId) {
    return API.apiClient.delete(`/clients/${clientId}`);
  },
  uploadClients(payload) {
    return API.apiClient.post(`/clientsUpload/`, payload.file);
  },
  downloadClientsAll() {
    return API2.apiClient.post(`/downLoadClientsAllExcel/`);
  },
};
