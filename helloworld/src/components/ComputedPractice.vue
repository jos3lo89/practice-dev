<script setup lang="ts">
import { computed, ref } from "vue";

const vat: number = 21;

let subTotal = ref<number>(0);
const totalVat = computed((): number => {
  return (vat * subTotal.value) / 100;
});

/* 
100 -------------subtotal
21 -------------- x

x = (21 * subtotal) / 100
*/
</script>

<template>
  <div>
    <label >sub total</label>
    <input v-model="subTotal" type="number" />
    <h3 v-custom-size2:xxl>total impuestos a pagar: {{ totalVat }} ({{ vat }}%)</h3>
  </div>
</template>

<style scoped></style>
