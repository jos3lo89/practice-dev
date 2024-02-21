<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    validator: (Ptitle) => typeof Ptitle === "string",
  },
  content: {
    type: String,
    required: false,
    default: "Este post no tiene cotenido",
  },
});

const mensaje = ref<string>("");

const emit = defineEmits(["sayHi"]);

const handleClick = (): void => {
  emit("sayHi", mensaje.value);
  mensaje.value = "";
};
</script>

<template>
  <div class="post">
    <h3>{{ props.title }}</h3>
    <p>
      {{ props.content }}
    </p>
    <input v-model="mensaje" type="text" />
    <button @click="handleClick()">mostrar mensaje</button>
  </div>
</template>

<style scoped>
.post {
  width: 300px;
  height: 100px;
  border-radius: 10px;
  background: antiquewhite;
  color: #101010;
  margin: 10px;
  padding: 10px;
}

input {
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  background: #303030;
  color: #efefef;
}
button {
  border: none;
  outline: none;
  padding: 5px;
  background: indigo;
  color: #efefef;
  border-radius: 5px;
  cursor: pointer;
}
</style>
