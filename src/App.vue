<template>
  <TestComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TestComponent from "./components/TestComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    TestComponent,
  },
});
</script>
