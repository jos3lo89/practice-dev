<template>
  <form>
    <input v-model="inputText" type="text" />
    <input v-model="agree" type="checkbox" /> Acepto los términos y condiciones
    <select v-model="country">
      <option>Sapin</option>
      <option value="UK">UK</option>
      <option value="France">France</option>
    </select>
  </form>
  <h3>{{ inputText }}</h3>
  <h4>{{ agree }}</h4>
  {{ country }}
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";

let inputText: Ref<string> = ref("");
let agree: Ref<boolean> = ref(true);
let country: Ref<string> = ref("Sapin");
</script>
<style scoped></style>
