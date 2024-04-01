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
  <div class="" v-else-if="error">{{ error.message }}</div>
</template>

<script>
// import useTransaction from ".\uses\fetchTransaction.js";
import { useTransaction } from "../uses/fetchTransaction";

export default {
  setup() {
    const { transactions, fetchAll } = useTransaction();
    fetchAll();
    return {
      transactions,
    };
  },
};
</script>
