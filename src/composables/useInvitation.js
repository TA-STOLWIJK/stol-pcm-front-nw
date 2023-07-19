import * as API from '@/services/API'
import { useSingleScanStore } from '@/stores/scans/scanSingleStore'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

const scanStore = useSingleScanStore()
export default (whichScan, clientId) => {
  const linkje = ref(null)

  if (whichScan === 'A') {
    linkje.value = `/aScansInvitation/${clientId}`
  }
  if (whichScan === 'B') {
    linkje.value = `/bScansInvitation/${clientId}`
  }
  if (whichScan === 'C') {
    linkje.value = `/cScansInvitation/${clientId}`
  }
  if (whichScan === 'D') {
    linkje.value = `/dScansInvitation/${clientId}`
  }
  if (whichScan === 'E') {
    linkje.value = `/eScansInvitation/${clientId}`
  }
  if (whichScan === 'H') {
    linkje.value = `/hScansInvitation/${clientId}`
  }
  if (whichScan === 'I') {
    linkje.value = `/iScansInvitation/${clientId}`
  }
  if (whichScan === 'J') {
    linkje.value = `/jScansInvitation/${clientId}`
  }
  if (whichScan === 'K') {
    linkje.value = `/kScansInvitation/${clientId}`
  }
  if (whichScan === 'L') {
    linkje.value = `/lScansInvitation/${clientId}`
  }
  if (whichScan === 'M') {
    linkje.value = `/mScansInvitation/${clientId}`
  }
  if (whichScan === 'O') {
    linkje.value = `/oScansInvitation/${clientId}`
  }
  if (whichScan === 'P') {
    linkje.value = `/pScansInvitation/${clientId}`
  }
  if (whichScan === 'Q') {
    linkje.value = `/qScansInvitation/${clientId}`
  }
  if (whichScan === 'R') {
    linkje.value = `/rScansInvitation/${clientId}`
  }
  if (whichScan === 'S') {
    linkje.value = `/sScansInvitation/${clientId}`
  }
  if (whichScan === 'T') {
    linkje.value = `/tScansInvitation/${clientId}`
  }
  if (whichScan === 'U') {
    linkje.value = `/uScansInvitation/${clientId}`
  }
  if (whichScan === 'V') {
    linkje.value = `/vScansInvitation/${clientId}`
  }
  if (whichScan === 'W') {
    linkje.value = `/wScansInvitation/${clientId}`
  }
  if (whichScan === 'X') {
    linkje.value = `/xScansInvitation/${clientId}`
  }
  if (whichScan === 'Y') {
    linkje.value = `/yScansInvitation/${clientId}`
  }
  if (whichScan === 'Z') {
    linkje.value = `/zScansInvitation/${clientId}`
  }
  if (whichScan === 'AA') {
    linkje.value = `/aaScansInvitation/${clientId}`
  }
  if (whichScan === 'AB') {
    linkje.value = `/abScansInvitation/${clientId}`
  }

  return API.apiClient
    .post(linkje.value)
    .then(() => {
      if (whichScan === 'A') {
        scanStore.getScanA(clientId)
      }
      if (whichScan === 'B') {
        scanStore.getScanB(clientId)
      }
      if (whichScan === 'C') {
        scanStore.getScanC(clientId)
      }
      if (whichScan === 'D') {
        scanStore.getScanD(clientId)
      }
      if (whichScan === 'E') {
        scanStore.getScanE(clientId)
      }
      if (whichScan === 'H') {
        scanStore.getScanH(clientId)
      }
      if (whichScan === 'I') {
        scanStore.getScanI(clientId)
      }
      if (whichScan === 'J') {
        scanStore.getScanJ(clientId)
      }
      if (whichScan === 'K') {
        scanStore.getScanK(clientId)
      }
      if (whichScan === 'L') {
        scanStore.getScanL(clientId)
      }
      if (whichScan === 'M') {
        scanStore.getScanM(clientId)
      }
      if (whichScan === 'N') {
        scanStore.getScanN(clientId)
      }
      if (whichScan === 'O') {
        scanStore.getScanO(clientId)
      }
      if (whichScan === 'P') {
        scanStore.getScanP(clientId)
      }
      if (whichScan === 'Q') {
        scanStore.getScanQ(clientId)
      }
      if (whichScan === 'R') {
        scanStore.getScanR(clientId)
      }
      if (whichScan === 'S') {
        scanStore.getScanS(clientId)
      }
      if (whichScan === 'T') {
        scanStore.getScanT(clientId)
      }
      if (whichScan === 'U') {
        scanStore.getScanU(clientId)
      }
      if (whichScan === 'V') {
        scanStore.getScanV(clientId)
      }
      if (whichScan === 'W') {
        scanStore.getScanW(clientId)
      }
      if (whichScan === 'X') {
        scanStore.getScanX(clientId)
      }
      if (whichScan === 'Y') {
        scanStore.getScanY(clientId)
      }
      if (whichScan === 'Z') {
        scanStore.getScanZ(clientId)
      }
      if (whichScan === 'AA') {
        scanStore.getScanAA(clientId)
      }
      if (whichScan === 'AB') {
        scanStore.getScanAB(clientId)
      }

    })
    .catch(() => {
      toast.error('Er gaat iets niet goed, probeer het opnieuw of neem contact met ons op.')
    })
    .finally(() => {
      toast.success('Uitnodiging is verzonden')
    })
}
