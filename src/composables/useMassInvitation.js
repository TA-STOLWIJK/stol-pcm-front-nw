import * as API from '@/services/API'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useSingleMass } from "@/stores/mass/massSingleStore";

const massSingleStore = useSingleMass()
export default (whichScan, massId) => {
  const linkje = ref(null)

  if (whichScan === 'A') {
    linkje.value = `/massInvitationA/${massId}`
  }
  if (whichScan === 'B') {
    linkje.value = `/massInvitationB/${massId}`
  }
  if (whichScan === 'H') {
    linkje.value = `/massInvitationH/${massId}`
  }
  if (whichScan === 'I') {
    linkje.value = `/massInvitationI/${massId}`
  }
  if (whichScan === 'J') {
    linkje.value = `/massInvitationJ/${massId}`
  }
  if (whichScan === 'L') {
    linkje.value = `/massInvitationL/${massId}`
  }
  if (whichScan === 'O') {
    linkje.value = `/massInvitationO/${massId}`
  }
  if (whichScan === 'P') {
    linkje.value = `/massInvitationP/${massId}`
  }
  if (whichScan === 'S') {
    linkje.value = `/massInvitationS/${massId}`
  }
  if (whichScan === 'U') {
    linkje.value = `/massInvitationU/${massId}`
  }
  if (whichScan === 'AB') {
    linkje.value = `/massInvitationAB/${massId}`
  }
  if (whichScan === 'KTV1') {
    linkje.value = `/massInvitationKTV1/${massId}`
  }

  return API.apiClient
    .get(linkje.value)
    .then(() => {
      massSingleStore.getAction(massId)
    })
    .catch(() => {
      toast.error('Er gaat iets niet goed, probeer het opnieuw of neem contact met ons op.')
    })
    .finally(() => {
      toast.success('Uitnodigingen zijn verzonden.')
    })
}
