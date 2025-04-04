<script setup lang="ts">
import { ref } from "vue";
import ButtonCounter from "./ButtonCounter.vue";
import BlogPost from "./BlogPost.vue";
import AlertBox from "./AlertBox.vue";
import Dynamic from "./dynamic/Dynamic.vue";

const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" },
]);

const postFontSize = ref(1);
</script>

<template>
  <h2>Button Component</h2>
  <ButtonCounter />

  <h2>Blog Posts</h2>
  <ul :style="{ fontSize: `${postFontSize}em` }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
      @shrink-text="postFontSize -= 0.1"
    />
  </ul>

  <h2>Vue Slots</h2>
  <AlertBox>Uh oh!</AlertBox>

  <h2>Dynamic Component</h2>
  <Dynamic />
</template>

<style scoped>
h2:not(:first-of-type) {
  margin-top: 16px;
}
</style>
