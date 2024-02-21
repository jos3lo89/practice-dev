<template>
  <ul>
    <li v-for="country in countries" :key="country.code">{{ country.name }}</li>
  </ul>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

interface Icountry {
  code: string;
  name: string;
}

let countries: Ref<Icountry[]> = ref([
  {
    code: "es",
    name: "spain",
  },
  {
    code: "en",
    name: "UK",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "it",
    name: "Italy",
  },
  {
    code: "pt",
    name: "Portual",
  },
]);
</script>

<style scoped></style>
