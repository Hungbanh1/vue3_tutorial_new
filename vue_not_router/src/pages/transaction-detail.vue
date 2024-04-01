<template>
  <h1>Transactions detail {{ $route.params.id }}</h1>
  <!-- <p>{{ $route }}</p> -->
  <div v-if="transaction" class="">
    <h3>name là :{{ transaction.name }}</h3>
    <h3>title là :{{ transaction.title }}</h3>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "App",
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("fetchTransaction", { id: route.params.id });
    return {
      transaction: computed(() => store.state.transaction),
    };
  },
};
</script>
