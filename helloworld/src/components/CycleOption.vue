<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CycleOption",
  data() {

  },
  methods: {},
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  unmounted() {
    console.log("unMounted");
  },
});
</script>

<template>
  <h1>Hola mundo CycleOption</h1>
</template>

<style scoped></style>
