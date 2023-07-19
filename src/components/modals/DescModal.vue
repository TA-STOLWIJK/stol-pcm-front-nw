<script setup>
import aText from '@/assets/quick/scan_a.json'
import bText from '@/assets/quick/scan_b.json'
import cText from '@/assets/quick/scan_c.json'
import dText from '@/assets/quick/scan_d.json'
import eText from '@/assets/quick/scan_e.json'
import hText from '@/assets/quick/scan_h.json'
import iText from '@/assets/quick/scan_i.json'
import jText from '@/assets/quick/scan_j.json'
import kText from '@/assets/quick/scan_k.json'
import lText from '@/assets/quick/scan_l.json'
import mText from '@/assets/quick/scan_m.json'
import nText from '@/assets/quick/scan_n.json'
import oText from '@/assets/quick/scan_o.json'
import pText from '@/assets/quick/scan_p.json'
import qText from '@/assets/quick/scan_q.json'
import rText from '@/assets/quick/scan_r.json'
import tText from '@/assets/quick/scan_t.json'
import wText from '@/assets/quick/scan_w.json'
import abText from '@/assets/quick/scan_ab.json'

import CloseButton from '@/components/button/CloseButton.vue'
import HeaderTable from '@/components/table/HeaderTable.vue'
import RowTable from '@/components/table/RowTable.vue'
import HeaderOne from '@/components/text/HeaderOne.vue'
import HeaderTwo from '@/components/text/HeaderTwo.vue'
import TextOne from '@/components/text/TextOne.vue'
import { ref } from 'vue'

const emit = defineEmits(['closeModal'])

const props = defineProps(['scan'])
const useCode = ref(null)

if (props.scan === 'A') {
  useCode.value = aText
} else if (props.scan === 'B') {
  useCode.value = bText
} else if (props.scan === 'C') {
  useCode.value = cText
} else if (props.scan === 'D') {
  useCode.value = dText
} else if (props.scan === 'E') {
  useCode.value = eText
} else if (props.scan === 'H') {
  useCode.value = hText
} else if (props.scan === 'I') {
  useCode.value = iText
} else if (props.scan === 'J') {
  useCode.value = jText
} else if (props.scan === 'K') {
  useCode.value = kText
} else if (props.scan === 'L') {
  useCode.value = lText
} else if (props.scan === 'M') {
  useCode.value = mText
} else if (props.scan === 'N') {
  useCode.value = nText
} else if (props.scan === 'O') {
  useCode.value = oText
} else if (props.scan === 'P') {
  useCode.value = pText
} else if (props.scan === 'Q') {
  useCode.value = qText
} else if (props.scan === 'R') {
  useCode.value = rText
}else if (props.scan === 'T') {
  useCode.value = tText
}else if (props.scan === 'W') {
  useCode.value = wText
}else if (props.scan === 'AB') {
  useCode.value = abText
}



const exit = () => {
  emit('closeModal')
}
</script>
<template>
  <div
    class="py-12 bg-gray-100 opacity-100 dark:bg-gray-900 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
    id="modal"
  >
    <div role="alert" class="container mx-auto w-11/12">
      <div
        class="relative py-8 px-5 md:px-10 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400"
      >
        <div class="text-left">
          <header-one>Personal QuickScan {{ useCode.title }}</header-one>
          <header-two>Doel</header-two>
          <text-one>{{ useCode.target }}</text-one>
          <header-two>Toelichting</header-two>
          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable>Item</HeaderTable>
                  <HeaderTable>Toelichting</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Doel</RowTable>
                  <RowTable>{{ useCode.one }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Tooling</RowTable>
                  <RowTable>{{ useCode.two }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Vervolgstap</RowTable>
                  <RowTable>{{ useCode.three }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
                  <RowTable>Pricing</RowTable>
                  <RowTable>{{ useCode.four }}</RowTable>
                </tr>
              </tbody>
            </table>
          </div>
          <header-two class="mt-4">Vragen en stellingen</header-two>

          <text-one>
            In deze Personal QuickScan worden de volgende vragen en stellingen voorgelegd aan de
            klant. Onderstaand een overzicht.
          </text-one>

          <div class="overflow-hidden border rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-base_light dark:bg-back_dark">
                <tr>
                  <HeaderTable>#</HeaderTable>
                  <HeaderTable>Vraag/stelling</HeaderTable>
                  <HeaderTable>Type</HeaderTable>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 1">
                  <RowTable>1</RowTable>
                  <RowTable>{{ useCode.stelling1 }}</RowTable>
                  <RowTable>{{ useCode.type1 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 1">
                  <RowTable>2</RowTable>
                  <RowTable>{{ useCode.stelling2 }}</RowTable>
                  <RowTable>{{ useCode.type2 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 2">
                  <RowTable>3</RowTable>
                  <RowTable>{{ useCode.stelling3 }}</RowTable>
                  <RowTable>{{ useCode.type3 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 3">
                  <RowTable>4</RowTable>
                  <RowTable>{{ useCode.stelling4 }}</RowTable>
                  <RowTable>{{ useCode.type4 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 4">
                  <RowTable>5</RowTable>
                  <RowTable>{{ useCode.stelling5 }}</RowTable>
                  <RowTable>{{ useCode.type5 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 5">
                  <RowTable>6</RowTable>
                  <RowTable>{{ useCode.stelling6 }}</RowTable>
                  <RowTable>{{ useCode.type6 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 6">
                  <RowTable>7</RowTable>
                  <RowTable>{{ useCode.stelling7 }}</RowTable>
                  <RowTable>{{ useCode.type7 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 7">
                  <RowTable>8</RowTable>
                  <RowTable>{{ useCode.stelling8 }}</RowTable>
                  <RowTable>{{ useCode.type8 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 8">
                  <RowTable>9</RowTable>
                  <RowTable>{{ useCode.stelling9 }}</RowTable>
                  <RowTable>{{ useCode.type9 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 9">
                  <RowTable>10</RowTable>
                  <RowTable>{{ useCode.stelling10 }}</RowTable>
                  <RowTable>{{ useCode.type10 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 10">
                  <RowTable>11</RowTable>
                  <RowTable>{{ useCode.stelling11 }}</RowTable>
                  <RowTable>{{ useCode.type11 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 11">
                  <RowTable>12</RowTable>
                  <RowTable>{{ useCode.stelling12 }}</RowTable>
                  <RowTable>{{ useCode.type12 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 12">
                  <RowTable>13</RowTable>
                  <RowTable>{{ useCode.stelling13 }}</RowTable>
                  <RowTable>{{ useCode.type13 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 13">
                  <RowTable>14</RowTable>
                  <RowTable>{{ useCode.stelling14 }}</RowTable>
                  <RowTable>{{ useCode.type14 }}</RowTable>
                </tr>
                <tr class="hover:bg-gray-200 dark:hover:bg-gray-500" v-if="useCode.number > 14">
                  <RowTable>15</RowTable>
                  <RowTable>{{ useCode.stelling15 }}</RowTable>
                  <RowTable>{{ useCode.type15 }}</RowTable>
                </tr>
              </tbody>
            </table>
          </div>
          <header-two class="mt-4">Extra informatie</header-two>
          <text-one>{{ useCode.extraInfo }}</text-one>
        </div>
        <CloseButton @click="exit" class="my-4" />
      </div>
    </div>
  </div>
</template>

<style></style>
