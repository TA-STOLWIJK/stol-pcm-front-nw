<script setup>

import FormalButton from "@/components/button/FormalButton.vue";
import { onMounted, ref } from "vue";
import pptxgen from 'pptxgenjs'
// import {fontFirstPageSubHeader, fontFirstPageThreeHeader,fontFirstPageHeader, firstPageRectangle,placeFirstPageThreeHeader,placeRight,placeFirstPageSubHeader,placeFirstPageHeader} from "@/json/Power/firstPage.json"
import firstPage from "@/json/Power/firstPage.json"
const props = defineProps(['dataScan', 'dataClient', 'dataSpec'])
const options = { year: 'numeric', month: 'long', day: 'numeric' }
const printDate =() => { return new Date().toLocaleDateString('nl-nl', options) }


const createPowerPoint = () => {
  let pres = new pptxgen()
  let slideStart = pres.addSlide('FIRST_SLIDE')
  slideStart.addText(
    [{ text: 'Noodopvolging', options: firstPage.fontFirstPageHeader }],
    firstPage.placeFirstPageHeader
  )

  let filename =
    'Rapportage_' +
    props.dataClient.first_name_client +
    '_' +
    props.dataClient.last_name_client +
    '_' +
   printDate() +
    '.pptx'
  // eslint-disable-next-line no-undef
  pres.writeFile({ fileName: filename })

}


onMounted(async () => {
  console.log('on mounted')})
</script>

<template>

  <FormalButton @click="createPowerPoint"></FormalButton>

</template>

<style scoped>

</style>
