<!-- eslint-disable vue/no-dupe-keys -->
<template>
  <h1>Transaction</h1>
  <div class="" v-if="transactions.length">
    <div class="item" v-for="item in transactions" :key="item.id">
      <router-link
        :to="{ name: 'transaction-detail', params: { id: item.id } }"
        >{{ item.name }}</router-link
      >

      <p>{{ item.description }}</p>
      <p>{{ item.title }}</p>
      <p>{{ item.amount }}</p>
    </div>
  </div>
  <div class="" v-else-if="error">{{ error }}</div>
  <h1>Testing</h1>
</template>

<script>
// import useTransaction from ".\uses\fetchTransaction.js";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    // console.log(store);
    store.dispatch("fetchAllTransactions");
    const transactions = computed(() => store.state.transactions);
    const error = computed(() => store.state.error);
    return { store, transactions, error };
  },
};
</script>
