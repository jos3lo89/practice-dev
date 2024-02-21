<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
name: "CounterComposition",
setup() {
  let counter: Ref = ref(0);
  const addCounter = (): void => {
    counter.value++;
  };

  return { counter, addCounter };
},
});
</script>


<template>
  <span>COMPOSITION (NO SETUP)</span>

<h1>{{ counter }}</h1>
<button @click="addCounter">Incrementar</button>
</template>

