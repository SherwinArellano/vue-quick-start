<script setup lang="ts"></script>

<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  --error: rgb(237, 60, 80);
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--error);
}

strong {
  font-weight: bold;
  color: var(--error);
}
</style>
