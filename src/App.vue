<script setup lang="ts">
import ComponentBasics from "@/features/component-basics/ComponentBasics.vue";
import { ref } from "vue";
import Watchers from "./features/watchers/Watchers.vue";
import BuiltInComponents from "./features/builtin-components/BuiltInComponents.vue";

const tabs = {
  ComponentBasics,
  Watchers,
  BuiltInComponents,
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
