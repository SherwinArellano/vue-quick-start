<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <button type="button" @click="count++">
    You clicked me {{ count }} times.
  </button>
</template>

<style scoped></style>
