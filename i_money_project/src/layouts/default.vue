<template>
  <navigation-header></navigation-header>
  <slot />
  <navigation-bottom></navigation-bottom>
</template>

<script>
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
export default {
  name: "defaultLayout",
  components: {
    NavigationBottom,
    NavigationHeader,
  },
};
</script>
