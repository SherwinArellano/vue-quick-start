<script setup lang="ts">
import ComponentBasics from "@/features/component-basics/ComponentBasics.vue";
import { ref } from "vue";
import Watchers from "./features/watchers/Watchers.vue";

const tabs = {
  ComponentBasics,
  Watchers,
};

const currentTab = ref<keyof typeof tabs>("ComponentBasics");
</script>

<template>
  <nav>
    <button
      v-for="(_, tab) in tabs"
      type="button"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
  </nav>

  <component :is="tabs[currentTab]"></component>
</template>

<style scoped></style>
