import * as API from "@/services/API";
import * as API2 from "@/services/API2";

export default {
  getMassClients(Id) {
    return API.apiClient.get(`/massClientsAll/${Id}`);
  },
  changeMassClients(payload) {
    return API.apiClient.post(`/massClientsChange/`, payload);
  },
  excelMassClients(Id) {
    return API2.apiClient.post(`/massClientsExcel/${Id}`);
  },
  excelMassReports(Id) {
    return API2.apiClient.post(`/massReportsExcel/${Id}`);
  },
};
