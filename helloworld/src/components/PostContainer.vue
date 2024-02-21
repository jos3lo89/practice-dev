<template>
  <div class="post-container">
    <PostCard></PostCard>
    <PostCard></PostCard>
    <PostCard></PostCard>
    <PostCard></PostCard>
  </div>
</template>

<script setup lang="ts">
import PostCard from "./PostCard.vue";
</script>

<style scoped>
.post-container {
  widows: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
