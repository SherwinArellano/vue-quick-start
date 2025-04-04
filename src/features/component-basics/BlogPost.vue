<script setup lang="ts">
interface Props {
  title: string;
}

interface Emits {
  "enlarge-text": [];
  "shrink-text": [];
}

const { title } = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <li>
    <h4>{{ title }}</h4>
    <button type="button" @click="emit('enlarge-text')">Enlarge text</button>
    <button type="button" @click="emit('shrink-text')">Shrink text</button>
  </li>
</template>

<style scoped></style>
