<template>
  <!-- <navigation-header></navigation-header> -->
  <h1>default</h1>
  <slot />
  <navigation-bottom v-if="!meta.isShowFooter" />
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
// import NavigationHeader from "@/components/NavigationHeader.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "default-layout",
  components: {
    NavigationBottom,
    // NavigationHeader,
  },
  setup() {
    const route = useRoute();
    console.log("default");
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
