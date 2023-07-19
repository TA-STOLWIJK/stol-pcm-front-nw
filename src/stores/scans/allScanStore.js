import AllScanService from '@/services/scans/allScanService'
import { getError } from '@/utils/helpers'
import { defineStore } from 'pinia'

export const useallScan = defineStore({
  id: 'allScanStore',
  state: () => ({
    allScans: {
      ascan: {
        id: null,
        status_a: true,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      bscan: {
        id: null,
        status_a: false,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      cscan: {
        id: null,
        status_a: false,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      dscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      escan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      hscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      iscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      jscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      kscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      lscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      mscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      nscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      oscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      pscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      qscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      rscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      sscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      tscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      uscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      vscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      wscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      xscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      yscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      zscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      aascan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
      abscan: {
        id: null,
        status_a: null,
        opp_client: null,
        opp_kans: null,
        opp_user: null,
        opp_profile: null
      },
    },
    error: null,
    loading: false
  }),

  actions: {
    async getAllScans(clientId) {
      try {
        this.loading = true
        const response = await AllScanService.getAllScan(clientId)
        this.allScans = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.teams = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    }
  },
  getters: {}
})
