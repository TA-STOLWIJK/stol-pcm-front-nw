<script setup>
import RowTable from '@/components/table/RowTable.vue'
import ColTableGo from "@/views/pcm/atrr/ColTableGo.vue";
import ColTableStatus from "@/views/pcm/atrr/ColTableStatus.vue";
import ColTableFaces from "@/views/pcm/atrr/ColTableFaces.vue";
import ColTableDesc from "@/views/pcm/atrr/ColTableDesc.vue";
import ColTableVideo from "@/views/pcm/atrr/ColTableVideo.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'titel'
  },
  desc: {
    type: String,
    required: true,
    default: 'desc'
  },
  innerAll: {
    type: Object,
    required:true,
  },
  onclickGo: {
    type: Function,
    required: true
  },
  onclickDesc: {
    type: Function,
    required: true
  },
  onclickVideo: {
    type: Function,
    required: true
  }
})

</script>

<template>
  <tr class="hover:bg-gray-200 dark:hover:bg-gray-500">
    <RowTable>{{ title }}</RowTable>
    <RowTable>{{ desc }}</RowTable>
    <ColTableGo @click="onclickGo" />
    <ColTableStatus :check="innerAll.status_a" />
    <ColTableFaces :faces="innerAll.opp_profile" />
    <ColTableFaces :faces="innerAll.opp_kans" />
    <ColTableFaces :faces="innerAll.opp_user" />
    <ColTableDesc @click="onclickDesc" />
    <ColTableVideo @click="onclickVideo" />
  </tr>
</template>
