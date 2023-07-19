import ScanService from '@/services/scans/allScanService'
import { getError } from '@/utils/helpers'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

export const useSingleScanStore = defineStore({
  id: 'scanSingleStore',
  state: () => ({
    scanData: {},
    error: null,
    loading: false,
    saving: false
  }),

  actions: {
    async getScanA(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanA(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanA() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText,
          // let op custom voor elke scan
          int_question_a: this.scanData.int_question_a,
          int_question_b: this.scanData.int_question_b,
          int_question_c: this.scanData.int_question_c,
          int_question_d: this.scanData.int_question_d,
          int_question_e: this.scanData.int_question_e
        }
        await ScanService.updateScanA(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultA(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanA(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },
    async getScanB(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanB(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanB() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText,
          // let op custom voor elke scan
          int_question_a: this.scanData.int_question_a,
          int_question_b: this.scanData.int_question_b
        }
        await ScanService.updateScanB(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultB(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanB(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    async getScanC(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanC(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanC() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanC(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultC(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanC(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    async getScanD(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanD(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanD() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanD(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultD(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanD(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },
    async getScanE(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanE(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanE() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanE(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultE(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanE(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },
    // scan H

    async getScanH(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanH(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanH() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanH(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultH(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanH(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan I

    async getScanI(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanI(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanI() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanI(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultI(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanI(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan J

    async getScanJ(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanJ(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanJ() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanJ(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultJ(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanJ(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },
    // scan K

    async getScanK(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanK(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanK() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanK(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultK(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanK(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan L

    async getScanL(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanL(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanL() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText,
          // let op custom voor elke scan
          int_question_a: this.scanData.int_question_a,
          int_question_b: this.scanData.int_question_b
        }
        await ScanService.updateScanL(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultL(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanL(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan M

    async getScanM(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanM(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanM() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanM(this.scanData.client_id, payload)
        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultM(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanM(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan O

    async getScanO(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanO(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanO() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanO(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultO(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanO(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },


    // scan P

    async getScanP(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanP(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanP() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanP(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultP(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanP(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },


    // scan R

    async getScanR(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanR(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanR() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanR(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultR(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanR(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },


    // scan O

    async getScanS(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanS(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanS() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanS(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultS(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanS(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },


    // scan T

    async getScanT(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanT(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanT() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText,
          // let op custom voor elke scan
          vis_b: this.scanData.vis_b,
          vis_c: this.scanData.vis_c,
          vis_d: this.scanData.vis_d,
          vis_e: this.scanData.vis_e,
          vis_f: this.scanData.vis_f,
        }
        await ScanService.updateScanT(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultT(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanT(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan U

    async getScanU(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanU(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanU() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanU(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultU(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanU(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan V

    async getScanV(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanV(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanV() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanV(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultV(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanV(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan W

    async getScanW(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanW(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanW() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText,
          // let op custom voor elke scan
          vis_a: this.scanData.vis_a,
          vis_b: this.scanData.vis_b,
          vis_c: this.scanData.vis_c,
          vis_d: this.scanData.vis_d,
          vis_e: this.scanData.vis_e,
          vis_f: this.scanData.vis_f,
        }
        await ScanService.updateScanW(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultW(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanW(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan X

    async getScanX(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanX(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanX() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanX(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultX(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanX(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan Y

    async getScanY(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanY(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanY() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanY(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultY(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanY(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan Z

    async getScanZ(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanZ(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanZ() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanZ(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultZ(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanZ(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },


    // scan AA

    async getScanAA(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanAA(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanAA() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanAA(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultAA(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanAA(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },

    // scan AB

    async getScanAB(clientId) {
      try {
        this.loading = true
        const response = await ScanService.getScanAB(clientId)
        this.scanData = response.data.data
        this.loading = false
        return response
      } catch (error) {
        this.scanData = null
        this.loading = false
        this.error = getError(error)
        return error
      }
    },
    async changeScanAB() {
      try {
        this.saving = true
        this.error = null
        const payload = {
          opp_user: this.scanData.opp_user,
          style: this.scanData.style,
          reminderA: this.scanData.reminderA,
          specialist: this.scanData.specialist,
          spec_id: this.scanData.spec_id,
          personalNote: this.scanData.personalNote,
          personalNoteText: this.scanData.personalNoteText
          // let op custom voor elke scan
          // int_question_a: this.scanData.int_question_a,
          // int_question_b: this.scanData.int_question_b,
        }
        await ScanService.updateScanAB(this.scanData.client_id, payload)

        toast.success('De data van deze scan is gewijzigd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis!')
        this.saving = false
        this.error = getError(error)
      }
    },

    async setDefaultAB(userId) {
      try {
        this.saving = true
        await ScanService.deleteScanAB(userId)
        toast.success('De data van deze QuickScan is verwijderd')
        this.saving = false
      } catch (error) {
        toast.error('Er gaat iets mis. Probeer het nogmaals of neem anders contact met ons op.')
        this.saving = false
        this.error = getError(error)
      }
    },
    // default
    async setDefault() {
      this.scanData = {}
      this.error = null
      this.loading = false
      this.saving = false
    }
  },
  getters: {}
})
