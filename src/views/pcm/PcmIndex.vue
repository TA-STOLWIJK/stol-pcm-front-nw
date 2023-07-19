<script setup>
import PageDefaultLayoutTwo from '@/components/mainStyle/PageDefaultLayoutTwo.vue'
import DescModal from '@/components/modals/DescModal.vue'
import VideoModal from '@/components/modals/VideoModal.vue'
import DividerTable from '@/components/table/DividerTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import { useSingleClient } from '@/stores/client/clientSingleStore'
import { useallScan } from '@/stores/scans/allScanStore'
import HeaderTablePcm from '@/views/pcm/atrr/HeaderTablePcm.vue'
import RowTablePCM from '@/views/pcm/atrr/RowTablePCM.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const clientSingleStore = useSingleClient()
const allScanStore = useallScan()

const showVideo = ref(false)
const showDesc = ref(false)
const videoPQS = ref(null)

// provide('item',allScanStore.allScans.ascan)

const goDescA = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'A'
  showDesc.value = true
}
const goDescB = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'B'
  showDesc.value = true
}

const goDescC = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'C'
  showDesc.value = true
}

const goDescD = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'D'
  showDesc.value = true
}
const goDescE = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'E'
  showDesc.value = true
}
const goDescH = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'H'
  showDesc.value = true
}
const goDescI = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'I'
  showDesc.value = true
}
const goDescJ = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'J'
  showDesc.value = true
}
const goDescK = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'K'
  showDesc.value = true
}
const goDescL = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'L'
  showDesc.value = true
}

const goDescM = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'M'
  showDesc.value = true
}

const goDescN = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'N'
  showDesc.value = true
}

const goDescO = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'O'
  showDesc.value = true
}

const goDescP = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'P'
  showDesc.value = true
}

const goDescQ = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'Q'
  showDesc.value = true
}

const goDescR = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'R'
  showDesc.value = true
}

const goDescT = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'T'
  showDesc.value = true
}

const goDescW = async () => {
  const el = document.getElementById('scroll')
  await el.scrollIntoView()
  videoPQS.value = 'W'
  showDesc.value = true
}
const goDescAB = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'AB'
  showDesc.value = true
}

const goVideoA = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'A'
  showVideo.value = true
}
const goVideoB = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'B'
  showVideo.value = true
}
const goVideoC = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'C'
  showVideo.value = true
}

const goVideoD = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'D'
  showVideo.value = true
}
const goVideoE = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'E'
  showVideo.value = true
}

const goVideoH = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'H'
  showVideo.value = true
}

const goVideoI = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'I'
  showVideo.value = true
}

const goVideoJ = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'J'
  showVideo.value = true
}
const goVideoK = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'K'
  showVideo.value = true
}

const goVideoL = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'L'
  showVideo.value = true
}

const goVideoM = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'M'
  showVideo.value = true
}

const goVideoN = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'N'
  showVideo.value = true
}

const goVideoO = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'O'
  showVideo.value = true
}
const goVideoP = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'P'
  showVideo.value = true
}
const goVideoQ = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'Q'
  showVideo.value = true
}

const goVideoR = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'R'
  showVideo.value = true
}

const goVideoT = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'T'
  showVideo.value = true
}

const goVideoW = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'W'
  showVideo.value = true
}

const goVideoAB = () => {
  const el = document.getElementById('scroll')
  el.scrollIntoView()
  videoPQS.value = 'AB'
  showVideo.value = true
}

const goQuick = () => {
  let clientId = route.params.id
  router.push({ name: 'pcmIndex', params: { id: clientId } })
}
const goQuickA = () => {
  let clientId = route.params.id
  router.push({ name: 'ascanIndex', params: { id: clientId } })
}
const goQuickB = () => {
  let clientId = route.params.id
  router.push({ name: 'bscanIndex', params: { id: clientId } })
}
const goQuickC = () => {
  let clientId = route.params.id
  router.push({ name: 'cscanIndex', params: { id: clientId } })
}
const goQuickD = () => {
  let clientId = route.params.id
  router.push({ name: 'dscanIndex', params: { id: clientId } })
}
const goQuickE = () => {
  let clientId = route.params.id
  router.push({ name: 'escanIndex', params: { id: clientId } })
}

const goQuickH = () => {
  let clientId = route.params.id
  router.push({ name: 'hscanIndex', params: { id: clientId } })
}
const goQuickI = () => {
  let clientId = route.params.id
  router.push({ name: 'iscanIndex', params: { id: clientId } })
}
const goQuickJ = () => {
  let clientId = route.params.id
  router.push({ name: 'jscanIndex', params: { id: clientId } })
}
const goQuickK = () => {
  let clientId = route.params.id
  router.push({ name: 'kscanIndex', params: { id: clientId } })
}
const goQuickL = () => {
  let clientId = route.params.id
  router.push({ name: 'lscanIndex', params: { id: clientId } })
}
const goQuickM = () => {
  let clientId = route.params.id
  router.push({ name: 'mscanIndex', params: { id: clientId } })
}
const goQuickO = () => {
  let clientId = route.params.id
  router.push({ name: 'oscanIndex', params: { id: clientId } })
}
const goQuickP = () => {
  let clientId = route.params.id
  router.push({ name: 'pscanIndex', params: { id: clientId } })
}
const goQuickQ = () => {
  let clientId = route.params.id
  router.push({ name: 'qscanIndex', params: { id: clientId } })
}
const goQuickR = () => {
  let clientId = route.params.id
  router.push({ name: 'rscanIndex', params: { id: clientId } })
}
const goQuickS = () => {
  let clientId = route.params.id
  router.push({ name: 'sscanIndex', params: { id: clientId } })
}
const goQuickT = () => {
  let clientId = route.params.id
  router.push({ name: 'tscanIndex', params: { id: clientId } })
}
const goQuickU = () => {
  let clientId = route.params.id
  router.push({ name: 'uscanIndex', params: { id: clientId } })
}
const goQuickV = () => {
  let clientId = route.params.id
  router.push({ name: 'vscanIndex', params: { id: clientId } })
}
const goQuickW = () => {
  let clientId = route.params.id
  router.push({ name: 'wscanIndex', params: { id: clientId } })
}
const goQuickX = () => {
  let clientId = route.params.id
  router.push({ name: 'xscanIndex', params: { id: clientId } })
}
const goQuickY = () => {
  let clientId = route.params.id
  router.push({ name: 'yscanIndex', params: { id: clientId } })
}
const goQuickZ = () => {
  let clientId = route.params.id
  router.push({ name: 'zscanIndex', params: { id: clientId } })
}
const goQuickAA = () => {
  let clientId = route.params.id
  router.push({ name: 'aascanIndex', params: { id: clientId } })
}
const goQuickAB = () => {
  let clientId = route.params.id
  router.push({ name: 'abscanIndex', params: { id: clientId } })
}

onMounted(() => {
  let clientId = route.params.id
  clientSingleStore.getClient(clientId)
  allScanStore.getAllScans(clientId)
})
</script>
<template>
  <div id="scroll">
    <PageDefaultLayoutTwo>
      <div class="p-1.5 w-full inline-block align-middle">
        <HeaderOne
          >QuickScans voor {{ clientSingleStore.first_name_client }}
          {{ clientSingleStore.last_name_client }}</HeaderOne
        >

        <divider-table />
        <HeaderTwo>Master</HeaderTwo>
        <div class="overflow-hidden border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <HeaderTablePcm />
            <tbody class="divide-y divide-gray-200">
              <RowTablePCM
                title="Update"
                desc="Wat zijn de belangrijkste onderwerpen voor de klant"
                :onclick-go="goQuickP"
                :inner-all="allScanStore.allScans.pscan"
                :onclick-desc="goDescP"
                :onclick-video="goVideoP"
              />
              <RowTablePCM
                title="Update 2"
                desc="Wat zijn de belangrijkste onderwerpen voor de klant"
                :onclick-go="goQuickAB"
                :inner-all="allScanStore.allScans.abscan"
                :onclick-desc="goDescAB"
                :onclick-video="goVideoAB"
              />
            </tbody>
          </table>
        </div>

        <divider-table />
        <HeaderTwo>Bedrijfsvoering</HeaderTwo>
        <div class="overflow-hidden border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <HeaderTablePcm />
            <tbody class="divide-y divide-gray-200">
              <RowTablePCM
                title="Noodplan"
                desc="Inventarisatie tbv noodplan"
                :onclick-go="goQuickA"
                :inner-all="allScanStore.allScans.ascan"
                :onclick-desc="goDescA"
                :onclick-video="goVideoA"
              />
              <RowTablePCM
                title="Optimaal financieel pakket"
                desc="Haal meer rendement met de administratie op orde"
                :onclick-go="goQuickC"
                :inner-all="allScanStore.allScans.cscan"
                :onclick-desc="goDescC"
                :onclick-video="goVideoC"
              />
              <RowTablePCM
                title="Sturen op resultaat"
                desc="Meer grip op rendement"
                :onclick-go="goQuickD"
                :inner-all="allScanStore.allScans.dscan"
                :onclick-desc="goDescD"
                :onclick-video="goVideoD"
              />
              <RowTablePCM
                title="Groei"
                desc="Ondersteun de ondernemer met groei"
                :onclick-go="goQuickM"
                :inner-all="allScanStore.allScans.mscan"
                :onclick-desc="goDescM"
                :onclick-video="goVideoM"
              />
              <RowTablePCM
                title="Managementinformatie"
                desc="Heeft de ondernemer behoefte aan managementinformatie"
                :onclick-go="goQuickR"
                :inner-all="allScanStore.allScans.rscan"
                :onclick-desc="goDescR"
                :onclick-video="goVideoR"
              />
              <RowTablePCM
                title="Duurzaam ondernemen"
                desc="Ondersteun de ondernemer met duurzaamheidsvragen"
                :onclick-go="goQuickT"
                :inner-all="allScanStore.allScans.tscan"
                :onclick-desc="goDescT"
                :onclick-video="goVideoT"
              />
            </tbody>
          </table>
        </div>

        <divider-table />
        <HeaderTwo>IT</HeaderTwo>
        <div class="overflow-hidden border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <HeaderTablePcm />
            <tbody class="divide-y divide-gray-200">
              <RowTablePCM
                title="Cyber Security"
                desc="Hoe staat het gesteld met IT veiligheid"
                :onclick-go="goQuickI"
                :inner-all="allScanStore.allScans.iscan"
                :onclick-desc="goDescI"
                :onclick-video="goVideoI"
              />
              <RowTablePCM
                title="Digitale strategie"
                desc="Digitale strategie van de klant"
                :onclick-go="goQuickJ"
                :inner-all="allScanStore.allScans.jscan"
                :onclick-desc="goDescJ"
                :onclick-video="goVideoJ"
              />
            </tbody>
          </table>
        </div>
        <divider-table />
        <HeaderTwo>Ondernemer in privé</HeaderTwo>
        <div class="overflow-hidden border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <HeaderTablePcm />
            <tbody class="divide-y divide-gray-200">
              <RowTablePCM
                title="Privé situatie"
                desc="Is privé alles up to date?"
                :onclick-go="goQuickK"
                :inner-all="allScanStore.allScans.kscan"
                :onclick-desc="goDescK"
                :onclick-video="goVideoK"
              />
            </tbody>
          </table>
        </div>
        <divider-table />
        <HeaderTwo>Juridisch</HeaderTwo>
        <div class="overflow-hidden border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <HeaderTablePcm />
            <tbody class="divide-y divide-gray-200">
              <RowTablePCM
                title="Juridische aspecten"
                desc="Is juridische ondersteuning gewenst?"
                :onclick-go="goQuickE"
                :inner-all="allScanStore.allScans.escan"
                :onclick-desc="goDescE"
                :onclick-video="goVideoE"
              />
            </tbody>
          </table>
        </div>

        <divider-table />
        <HeaderTwo>HR</HeaderTwo>
        <div class="overflow-hidden border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <HeaderTablePcm />
            <tbody class="divide-y divide-gray-200">
              <RowTablePCM
                title="Pensioen"
                desc="Pensioen voor de medewerkers op orde?"
                :onclick-go="goQuickO"
                :inner-all="allScanStore.allScans.oscan"
                :onclick-desc="goDescO"
                :onclick-video="goVideoO"
              />
              <RowTablePCM
                title="Werkgeversscan"
                desc="Breed inzicht in werkgeversvraagstukken"
                :onclick-go="goQuickW"
                :inner-all="allScanStore.allScans.wscan"
                :onclick-desc="goDescW"
                :onclick-video="goVideoW"
              />
            </tbody>
          </table>
        </div>

        <divider-table />
        <HeaderTwo>Exit</HeaderTwo>
        <div class="overflow-hidden border rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <HeaderTablePcm />
            <tbody class="divide-y divide-gray-200">
              <RowTablePCM
                title="Noodplan"
                desc="Inventarisatie noodplan"
                :onclick-go="goQuickA"
                :inner-all="allScanStore.allScans.ascan"
                :onclick-desc="goDescA"
                :onclick-video="goVideoA"
              />
              <RowTablePCM
                title="Familiestatuut"
                desc="Laat de klant kennismaken met het familiestatuut"
                :onclick-go="goQuickB"
                :inner-all="allScanStore.allScans.bscan"
                :onclick-desc="goDescB"
                :onclick-video="goVideoB"
              />

              <RowTablePCM
                title="Exit planning"
                desc="Heeft de klant een exit voor ogen?"
                :onclick-go="goQuickH"
                :inner-all="allScanStore.allScans.hscan"
                :onclick-desc="goDescH"
                :onclick-video="goVideoH"
              />

              <RowTablePCM
                title="Familiestatuut AGRO"
                desc="Laat de klant kennismaken met het familiestatuut"
                :onclick-go="goQuickL"
                :inner-all="allScanStore.allScans.lscan"
                :onclick-desc="goDescL"
                :onclick-video="goVideoL"
              />
            </tbody>
          </table>
        </div>
      </div>
      <VideoModal :scan="videoPQS" v-if="showVideo" @closeModal="showVideo = false" />
      <DescModal :scan="videoPQS" v-if="showDesc" @closeModal="showDesc = false" />
    </PageDefaultLayoutTwo>
  </div>
</template>
