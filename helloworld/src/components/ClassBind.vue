<script lang="ts" setup>
import { Ref, ref } from "vue";

let hasError = true;
let color: Ref<string> = ref("red");

const handleClick = (): void => {
  color.value = "green";
};
</script>


<template>
  <p :class="{ danger: hasError }">
    El mensaje se ha enviado satisfactoriamente.
  </p>

  <div :style="{ background: color, width: '100px', height: '100px' }"></div>

  <button @click="handleClick()">Cambia color</button>
</template>


<style scoped>
.danger {
  color: red;
}
</style>
