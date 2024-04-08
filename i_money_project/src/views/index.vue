<template>
  <navigation-header></navigation-header>

  <div class="mt-6" v-if="user">{{ user.displayName }}</div>
  <navigation-bottom></navigation-bottom>
  <slot />
</template>

<script>
import { useUser } from "@/composables/useUser";
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";

export default {
  name: "IndexLayout", // Updated component name to 'AuthLayout'
  components: {
    NavigationBottom,
    NavigationHeader,
  },
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return {
      user,
    };
  },
};
</script>
