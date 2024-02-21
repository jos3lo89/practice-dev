<script setup lang="ts">
import { ref, computed } from "vue";

const message = ref("");

const msgReverse = computed((): string => {
  return message.value.split("").reverse().join("");
});
</script>

<template>
  <div>
    <input v-model="message" type="text" />
    <h3>{{ message }}</h3>
    <h4>{{ msgReverse }}</h4>
  </div>
</template>

<style scoped></style>
