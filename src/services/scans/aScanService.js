import * as API from "@/services/API";
import * as API2 from "@/services/API2";

export default {
  getScan(clientId) {
    return API.apiClient.get(`/aScans/${clientId}`);
  },
  getScans() {
    return API.apiClient.get(`/aScans/`);
  },
  postScan(payload) {
    return API.apiClient.post(`/aScans/`, payload);
  },
  updateScan(clientId, payload) {
    return API.apiClient.put(`/aScans/${clientId}`, payload);
  },
  deleteScan(clientId) {
    return API.apiClient.delete(`/aScans/${clientId}`);
  },
  sendEmail(clientId) {
    return API.apiClient.post(`/aScansInvitation/${clientId}`);
  },
  pdfGenerate(Id) {
    return API2.apiClient.post(`/pdfGenerateA/${Id}`);
  },
};
