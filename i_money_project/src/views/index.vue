<template>
  <div>
    <h1>trang logdasdasdin</h1>
    <div class="mt-6" v-if="user">{{ user.displayName }}</div>
  </div>
  <slot />
</template>

<script>
import { useUser } from "@/composables/useUser";

export default {
  name: "IndexLayout", // Updated component name to 'AuthLayout'
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return {
      user,
    };
  },
};
</script>
