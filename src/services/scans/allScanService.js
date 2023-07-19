import * as API from '@/services/API'

export default {
  getAllScan(clientId) {
    return API.apiClient.get(`/showAllScan/${clientId}`)
  },
  getScanA(clientId) {
    return API.apiClient.get(`/aScans/${clientId}`)
  },
  updateScanA(clientId, payload) {
    return API.apiClient.put(`/aScans/${clientId}`, payload)
  },
  deleteScanA(clientId) {
    return API.apiClient.delete(`/aScans/${clientId}`)
  },
  getScanB(clientId) {
    return API.apiClient.get(`/bScans/${clientId}`)
  },
  updateScanB(clientId, payload) {
    return API.apiClient.put(`/bScans/${clientId}`, payload)
  },
  deleteScanB(clientId) {
    return API.apiClient.delete(`/bScans/${clientId}`)
  },
  getScanC(clientId) {
    return API.apiClient.get(`/cScans/${clientId}`)
  },
  updateScanC(clientId, payload) {
    return API.apiClient.put(`/cScans/${clientId}`, payload)
  },
  deleteScanC(clientId) {
    return API.apiClient.delete(`/cScans/${clientId}`)
  },
  getScanD(clientId) {
    return API.apiClient.get(`/dScans/${clientId}`)
  },
  updateScanD(clientId, payload) {
    return API.apiClient.put(`/dScans/${clientId}`, payload)
  },
  deleteScanD(clientId) {
    return API.apiClient.delete(`/dScans/${clientId}`)
  },
  getScanE(clientId) {
    return API.apiClient.get(`/eScans/${clientId}`)
  },
  updateScanE(clientId, payload) {
    return API.apiClient.put(`/eScans/${clientId}`, payload)
  },
  deleteScanE(clientId) {
    return API.apiClient.delete(`/eScans/${clientId}`)
  },
  getScanH(clientId) {
    return API.apiClient.get(`/hScans/${clientId}`)
  },
  updateScanH(clientId, payload) {
    return API.apiClient.put(`/hScans/${clientId}`, payload)
  },
  deleteScanH(clientId) {
    return API.apiClient.delete(`/hScans/${clientId}`)
  },
  getScanI(clientId) {
    return API.apiClient.get(`/iScans/${clientId}`)
  },
  updateScanI(clientId, payload) {
    return API.apiClient.put(`/iScans/${clientId}`, payload)
  },
  deleteScanI(clientId) {
    return API.apiClient.delete(`/iScans/${clientId}`)
  },
  getScanJ(clientId) {
    return API.apiClient.get(`/jScans/${clientId}`)
  },
  updateScanJ(clientId, payload) {
    return API.apiClient.put(`/jScans/${clientId}`, payload)
  },
  deleteScanJ(clientId) {
    return API.apiClient.delete(`/jScans/${clientId}`)
  },
  getScanK(clientId) {
    return API.apiClient.get(`/kScans/${clientId}`)
  },
  updateScanK(clientId, payload) {
    return API.apiClient.put(`/kScans/${clientId}`, payload)
  },
  deleteScanK(clientId) {
    return API.apiClient.delete(`/kScans/${clientId}`)
  },
  getScanL(clientId) {
    return API.apiClient.get(`/lScans/${clientId}`)
  },
  updateScanL(clientId, payload) {
    return API.apiClient.put(`/lScans/${clientId}`, payload)
  },
  deleteScanL(clientId) {
    return API.apiClient.delete(`/lScans/${clientId}`)
  },
  getScanM(clientId) {
    return API.apiClient.get(`/mScans/${clientId}`)
  },
  updateScanM(clientId, payload) {
    return API.apiClient.put(`/mScans/${clientId}`, payload)
  },
  deleteScanM(clientId) {
    return API.apiClient.delete(`/mScans/${clientId}`)
  },
  getScanO(clientId) {
    return API.apiClient.get(`/oScans/${clientId}`)
  },
  updateScanO(clientId, payload) {
    return API.apiClient.put(`/oScans/${clientId}`, payload)
  },
  deleteScanO(clientId) {
    return API.apiClient.delete(`/oScans/${clientId}`)
  },
  getScanP(clientId) {
    return API.apiClient.get(`/pScans/${clientId}`)
  },
  updateScanP(clientId, payload) {
    return API.apiClient.put(`/pScans/${clientId}`, payload)
  },
  deleteScanP(clientId) {
    return API.apiClient.delete(`/pScans/${clientId}`)
  },
  getScanQ(clientId) {
    return API.apiClient.get(`/qScans/${clientId}`)
  },
  updateScanQ(clientId, payload) {
    return API.apiClient.put(`/qScans/${clientId}`, payload)
  },
  deleteScanQ(clientId) {
    return API.apiClient.delete(`/qScans/${clientId}`)
  },
  getScanR(clientId) {
    return API.apiClient.get(`/rScans/${clientId}`)
  },
  updateScanR(clientId, payload) {
    return API.apiClient.put(`/rScans/${clientId}`, payload)
  },
  deleteScanR(clientId) {
    return API.apiClient.delete(`/rScans/${clientId}`)
  },
  getScanS(clientId) {
    return API.apiClient.get(`/sScans/${clientId}`)
  },
  updateScanS(clientId, payload) {
    return API.apiClient.put(`/sScans/${clientId}`, payload)
  },
  deleteScanS(clientId) {
    return API.apiClient.delete(`/sScans/${clientId}`)
  },
  getScanT(clientId) {
    return API.apiClient.get(`/tScans/${clientId}`)
  },
  updateScanT(clientId, payload) {
    return API.apiClient.put(`/tScans/${clientId}`, payload)
  },
  deleteScanT(clientId) {
    return API.apiClient.delete(`/tScans/${clientId}`)
  },
  getScanU(clientId) {
    return API.apiClient.get(`/uScans/${clientId}`)
  },
  updateScanU(clientId, payload) {
    return API.apiClient.put(`/uScans/${clientId}`, payload)
  },
  deleteScanU(clientId) {
    return API.apiClient.delete(`/uScans/${clientId}`)
  },
  getScanV(clientId) {
    return API.apiClient.get(`/vScans/${clientId}`)
  },
  updateScanV(clientId, payload) {
    return API.apiClient.put(`/vScans/${clientId}`, payload)
  },
  deleteScanV(clientId) {
    return API.apiClient.delete(`/vScans/${clientId}`)
  },
  getScanW(clientId) {
    return API.apiClient.get(`/wScans/${clientId}`)
  },
  updateScanW(clientId, payload) {
    return API.apiClient.put(`/wScans/${clientId}`, payload)
  },
  deleteScanW(clientId) {
    return API.apiClient.delete(`/wScans/${clientId}`)
  },
  getScanX(clientId) {
    return API.apiClient.get(`/xScans/${clientId}`)
  },
  updateScanX(clientId, payload) {
    return API.apiClient.put(`/xScans/${clientId}`, payload)
  },
  deleteScanX(clientId) {
    return API.apiClient.delete(`/xScans/${clientId}`)
  },
  getScanY(clientId) {
    return API.apiClient.get(`/yScans/${clientId}`)
  },
  updateScanY(clientId, payload) {
    return API.apiClient.put(`/yScans/${clientId}`, payload)
  },
  deleteScanY(clientId) {
    return API.apiClient.delete(`/yScans/${clientId}`)
  },
  getScanZ(clientId) {
    return API.apiClient.get(`/zScans/${clientId}`)
  },
  updateScanZ(clientId, payload) {
    return API.apiClient.put(`/zScans/${clientId}`, payload)
  },
  deleteScanZ(clientId) {
    return API.apiClient.delete(`/zScans/${clientId}`)
  },
  getScanAA(clientId) {
    return API.apiClient.get(`/aaScans/${clientId}`)
  },
  updateScanAA(clientId, payload) {
    return API.apiClient.put(`/aaScans/${clientId}`, payload)
  },
  deleteScanAA(clientId) {
    return API.apiClient.delete(`/aaScans/${clientId}`)
  },
  getScanAB(clientId) {
    return API.apiClient.get(`/abScans/${clientId}`)
  },
  updateScanAB(clientId, payload) {
    return API.apiClient.put(`/abScans/${clientId}`, payload)
  },
  deleteScanAB(clientId) {
    return API.apiClient.delete(`/abScans/${clientId}`)
  }
}
