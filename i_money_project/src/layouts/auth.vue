<template>
  <h1>Auth</h1>
  <!-- <navigation-brand></navigation-brand> -->
  <slot />
</template>

<script>
// import { NavigationBrand } from "@/components/NavigationBrand.vue";
export default {
  name: "auth-layout", // Updated component name to 'AuthLayout'
  // Your script code here
  // components: {
  //   NavigationBrand,
  // },
  setup() {
    console.log("ok");
  },
};
</script>
