<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <button @click="count++">You clicked {{ count }} times.</button>
</template>

<style scoped></style>
