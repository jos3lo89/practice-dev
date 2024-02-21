<script setup lang="ts">
import PostDetail from "./PostDeatil.vue";

interface Iinfo {
  title: string;
  content: string;
}

let info: Iinfo[] = [
  { title: "Este es el post 1", content: "Texto de ejemplo 1" },
  { title: "Este es el post 2", content: "Texto de ejemplo 2" },
  { title: "Este es el post 3", content: "Texto de ejemplo 3" },
  { title: "Este es el post 4", content: "Texto de ejemplo 4" },
  { title: "Este es el post 5", content: "Texto de ejemplo 5" },
];

function showAlert(msg: string): void {
  if (msg === "") return;
  alert(msg);
}
</script>

<template>
  <div class="container">
    <PostDetail
      v-for="(post, i) in info"
      :key="i"
      :title="post.title"
      :content="post.content"
      @sayHi="showAlert"
    ></PostDetail>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
