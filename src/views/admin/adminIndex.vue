<script setup>
import PageDefaultLayout from '@/components/mainStyle/PageDefaultLayout.vue'
import { onMounted, ref } from "vue";
import linkService from "@/services/admin/LinkService";

const links = ref([]);
const getLinks = () => {
  linkService.getMains(1)
    .then((response) =>{
      links.value= response.data.data
    })
};

onMounted(() => {
  getLinks();
});
</script>

<template>
  <PageDefaultLayout>
    <div class="text-2xl text-center">Hier is het hoofdblad van Admin</div>
    <div>hier komen een aantal grafieken aantal teams, users etc.</div>
    <div>
      <ul>
        <li>
          <div>verder excel en powerpoint standaard reports</div>
        </li>
        <li>
          <div>verder toe te voegen</div>
        </li>
        <li>
          <div>{{ links.pqs_a }}</div>
        </li>
      </ul>
    </div>
  </PageDefaultLayout>
</template>
