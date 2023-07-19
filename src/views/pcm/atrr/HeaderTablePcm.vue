<template>
  <thead class="bg-base_light dark:bg-back_dark">
  <tr>
    <HeaderTable class="w-1/6">Titel</HeaderTable>
    <HeaderTable class="w-1/2">Omschrijving</HeaderTable>
    <HeaderTableIcon class="w-0.5">GO</HeaderTableIcon>
    <HeaderTableIcon class="w-0.5">Start</HeaderTableIcon>
    <HeaderTableIcon class="w-0.5">Profiel</HeaderTableIcon>
    <HeaderTableIcon class="w-0.5">Update</HeaderTableIcon>
    <HeaderTableIcon class="w-0.5">RelMan</HeaderTableIcon>
    <HeaderTableIcon class="w-0.5">Besch</HeaderTableIcon>
    <HeaderTableIcon class="w-0.5">Animatie</HeaderTableIcon>
  </tr>
  </thead>
</template>
<script>
import HeaderTable from "@/components/table/HeaderTable.vue";
import HeaderTableIcon from "@/components/table/HeaderTableIcon.vue";

export default {
  name: "HeaderTablePcm", components: { HeaderTableIcon, HeaderTable }
};
</script>
