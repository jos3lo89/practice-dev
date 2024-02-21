<template>
  <h1 v-if="age < 18">Eres menor de edad</h1>
  <h1 v-else-if="age > 18">Eres mayor de edad</h1>
  <h1 v-show="age < 18">v-show</h1>
</template>

<script lang="ts" setup>
// Composition API
// import { defineComponent } from "vue";
// export default defineComponent({
//   name: "ExampleSelective",
//   setup() {
//     let age = 10;
//     return { age };
//   },
// });

// Composition API (setup)

let age = 10;
</script>

<style scoped>
h1 {
  color: green;
}
</style>
