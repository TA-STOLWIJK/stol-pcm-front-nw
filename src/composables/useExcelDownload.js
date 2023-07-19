import * as API2 from '@/services/API2'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
export default (whichExcel, id) => {
  const name = ref(null)
  const linkje = ref(null)

  if (whichExcel === 'user') {
    name.value = 'Rapportage_gebruikers' + '.xlsx'
    linkje.value = '/downLoadUsersExcel/'
  }
  if (whichExcel === 'mass') {
    name.value = 'Rapportage_geselecteerde_gebruikers' + '.xlsx'
    linkje.value = `massClientsExcel/${id}`
  }
  if (whichExcel === 'massReport') {
    name.value = 'Rapportage_resultaat' + '.xlsx'
    linkje.value = `/massReportsExcel/${id}`
  }
  if (whichExcel === 'face') {
    name.value = 'Rapportage_ktv_afspraak' + '.xlsx'
    linkje.value = '/downLoadFaceExcel/'
  }
  if (whichExcel === 'online') {
    name.value = 'Rapportage_ktv_online' + '.xlsx'
    linkje.value = '/downLoadOnlineExcel/'
  }
  if (whichExcel === 'phone') {
    name.value = 'Rapportage_telefoon_afspraak' + '.xlsx'
    linkje.value = '/downLoadPhoneExcel/'
  }


  return API2.apiClient
    .post(linkje.value)
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', name.value)
      document.body.appendChild(link)
      link.click()
    })
    .catch(() => {
      toast.error('Er gaat iets niet goed, probeer het opnieuw of neem contact met ons op.')
    })
    .finally(() => {
      toast.success('Rapport is onderweg')
    })
}
