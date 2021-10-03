<template>
  <button @click="toggleColor">Toggle Color</button>
  <div :class="toggleableClass">Toggleable</div>
  <div :class="$style.redClass">Red</div>
  <div :class="$style.blueClass">Blue</div>
  <!-- These should throw an error because no such class exists. At least with Volar, 
  I get IntelliSense for which classes _do_ exist, but it extends Record<string, string> so doesn't throw errors -->
  <div :class="$style.typoRedClass">Red Typo</div>
  <div :class="$style.typoBlueClass">Blue Typo</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/runtime-core";
import { useCssModule } from "@vue/runtime-dom";

export default defineComponent({
  setup() {
    const isRed = ref(true);
    const toggleColor = () => (isRed.value = !isRed.value);
    const $style = useCssModule();
    const toggleableClass = computed(() => ({
      [$style.redClass]: isRed.value,
      [$style.blueClass]: !isRed.value,
      // These should throw an error because no such class exists
      // At the very least, it would nice to have IntelliSense to know which classes exist
      [$style.typoRedClass]: isRed.value,
      [$style.typoRlueClass]: !isRed.value,
    }));

    return {
      toggleColor,
      toggleableClass,
    };
  },
});
</script>

<style lang="scss" module>
.redClass {
  color: red;
}

.blueClass {
  color: blue;
}
</style>
