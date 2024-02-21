<script setup lang="ts">
import { onMounted, onUpdated } from "vue";

onMounted((): void => {
  console.log("onMounted");
});

onUpdated((): void => {
  console.log("onUpdated");
});
</script>

<template>
  <h1>CycleComposition</h1>
</template>

<style scoped></style>
