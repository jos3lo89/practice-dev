<template>
  <span>SETUP</span>
<h4>{{ numero }}</h4>
<button @click="Incrementar">Incrementar</button>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";

const numero: Ref = ref(0);

const Incrementar = (): void => {
numero.value++;
};
</script>
