import * as API2 from '@/services/API2'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
export default (whichPdf,clientId) => {
  const name = ref(null)
  const linkje = ref(null)

  if (whichPdf === 'A') {
    name.value = 'Rapportage_noodopvolging' + '.pdf'
    linkje.value = `/pdfGenerateA/${clientId}`
  }

  if (whichPdf === 'B') {
    name.value = 'Rapportage_familiestatuut' + '.pdf'
    linkje.value = `/pdfGenerateB/${clientId}`
  }
  if (whichPdf === 'C') {
    name.value = 'Rapportage_optimaal_financieel_pakket' + '.pdf'
    linkje.value = `/pdfGenerateC/${clientId}`
  }
  if (whichPdf === 'D') {
    name.value = 'Rapportage_sturen_op_resultaat' + '.pdf'
    linkje.value = `/pdfGenerateD/${clientId}`
  }
  if (whichPdf === 'E') {
    name.value = 'Rapportage_juridische_aspecten' + '.pdf'
    linkje.value = `/pdfGenerateE/${clientId}`
  }
  if (whichPdf === 'H') {
    name.value = 'Rapportage_exit_planning' + '.pdf'
    linkje.value = `/pdfGenerateH/${clientId}`
  }
  if (whichPdf === 'I') {
    name.value = 'Rapportage_cyber_security' + '.pdf'
    linkje.value = `/pdfGenerateI/${clientId}`
  }
  if (whichPdf === 'J') {
    name.value = 'Rapportage_digitale strategie_planning' + '.pdf'
    linkje.value = `/pdfGenerateJ/${clientId}`
  }
  if (whichPdf === 'K') {
    name.value = 'Rapportage_privé_situatie' + '.pdf'
    linkje.value = `/pdfGenerateK/${clientId}`
  }
  if (whichPdf === 'L') {
    name.value = 'Rapportage_familiestatuut' + '.pdf'
    linkje.value = `/pdfGenerateL/${clientId}`
  }
  if (whichPdf === 'M') {
    name.value = 'Rapportage_groei' + '.pdf'
    linkje.value = `/pdfGenerateM/${clientId}`
  }
  if (whichPdf === 'O') {
    name.value = 'Rapportage_pensioen' + '.pdf'
    linkje.value = `/pdfGenerateO/${clientId}`
  }
  if (whichPdf === 'P') {
    name.value = 'Rapportage_update' + '.pdf'
    linkje.value = `/pdfGenerateP/${clientId}`
  }
  if (whichPdf === 'Q') {
    name.value = 'Rapportage_financial_planning' + '.pdf'
    linkje.value = `/pdfGenerateQ/${clientId}`
  }
  if (whichPdf === 'R') {
    name.value = 'Rapportage_.managementinformatie' + '.pdf'
    linkje.value = `/pdfGenerateR/${clientId}`
  }
  if (whichPdf === 'S') {
    name.value = 'Rapportage_.....' + '.pdf'
    linkje.value = `/pdfGenerateS/${clientId}`
  }
  if (whichPdf === 'T') {
    name.value = 'Rapportage_duurzaam_ondernemen' + '.pdf'
    linkje.value = `/pdfGenerateT/${clientId}`
  }
  if (whichPdf === 'U') {
    name.value = 'Rapportage_......' + '.pdf'
    linkje.value = `/pdfGenerateU/${clientId}`
  }
  if (whichPdf === 'V') {
    name.value = 'Rapportage_.....' + '.pdf'
    linkje.value = `/pdfGenerateV/${clientId}`
  }
  if (whichPdf === 'W') {
    name.value = 'Rapportage_werkgeversscan' + '.pdf'
    linkje.value = `/pdfGenerateW/${clientId}`
  }
  if (whichPdf === 'X') {
    name.value = 'Rapportage_.....' + '.pdf'
    linkje.value = `/pdfGenerateX/${clientId}`
  }
  if (whichPdf === 'Y') {
    name.value = 'Rapportage_.....' + '.pdf'
    linkje.value = `/pdfGenerateO/${clientId}`
  }
  if (whichPdf === 'Z') {
    name.value = 'Rapportage_.....' + '.pdf'
    linkje.value = `/pdfGenerateY/${clientId}`
  }
  if (whichPdf === 'AA') {
    name.value = 'Rapportage_.....' + '.pdf'
    linkje.value = `/pdfGenerateAA/${clientId}`
  }
  if (whichPdf === 'AB') {
    name.value = 'Rapportage_update' + '.pdf'
    linkje.value = `/pdfGenerateAB/${clientId}`
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
