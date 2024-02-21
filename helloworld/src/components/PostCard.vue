<template>
  <div class="post-card">
    <h3>Titulo</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda!
    </p>
    <PostButton></PostButton>
  </div>
</template>

<script setup lang="ts">
import PostButton from "./PostButton.vue";
</script>

<style scoped>
.post-card {
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
}
</style>
