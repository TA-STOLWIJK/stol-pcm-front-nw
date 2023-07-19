import * as API from "@/services/API";

export default {
  getMassAction(Id) {
    return API.apiClient.get(`/massActions/${Id}`);
  },
  getMassActions() {
    return API.apiClient.get(`/massActions/`);
  },
  postMassAction(payload) {
    return API.apiClient.post(`/massActions/`, payload);
  },
  updateMassAction(Id, payload) {
    return API.apiClient.put(`/massActions/${Id}`, payload);
  },
  deleteMassAction(Id) {
    return API.apiClient.delete(`/massActions/${Id}`);
  },
  getMassPowerDataA(iD) {
    return API.apiClient.get(`/massPowerDataA/${iD}`);
  },
};
