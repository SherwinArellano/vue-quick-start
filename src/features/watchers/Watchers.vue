<script setup lang="ts">
import { ref, watch } from "vue";

const x = ref(0);
const obj = ref({ count: 0 });

watch(
  x,
  (newX) => {
    console.log(`x is ${x.value}`);
    console.log(`x is ${newX}`);
  },
  {
    immediate: true,
  }
);

watch(
  () => obj.value.count,
  (count) => {
    console.log("Obj Count:", count);
  }
);
</script>

<template>
  <button @click="x++">Mutate X</button>
  <button @click="obj.count++">Mutate Obj</button>
</template>

<style scoped></style>
