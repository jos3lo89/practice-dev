<script setup lang="ts">
import PostService from "../services/PostService";
import { Ref, onMounted } from "vue";
import Ipost from "../interfaces/IPost";

const sevice = new PostService();
const posts: Ref<Ipost[]> = sevice.getPost();

onMounted(async () => {
  await sevice.fetchAll();
});
</script>

<template>
  <h1>Listado de post</h1>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
</template>

<style scoped>
.post-list {
  max-width: 95vw;
  margin:0 auto;
  background: #303030;
  padding: 20px;
}

.post-list li {
  border: 1px solid #ccc;
  color: #efefef;
  padding: 10px;
  text-align: center;
  list-style: none;
}
</style>
