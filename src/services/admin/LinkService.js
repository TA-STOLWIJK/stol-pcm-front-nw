import * as API from "@/services/API";

export default {
  getMain(Id) {
    return API.apiClient.get(`/links/${Id}`);
  },
  getMains(Id) {
    return API.apiClient.get(`/links/${Id}`);
  },
  updateMain(Id, payload) {
    return API.apiClient.put(`/links/${Id}`, payload);
  },
};
