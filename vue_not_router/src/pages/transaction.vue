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
import { ref } from "vue";
export default {
  data() {
    return {
      // transactions: [
      //   {
      //     id: 1,
      //     name: "Jane Doe",
      //     amount: 1000,
      //     date: "2020-01-01",
      //   },
      //   {
      //     id: 2,
      //     name: "John Doe",
      //     amount: 2000,
      //     date: "2020-01-02",
      //   },
      //   {
      //     id: 3,
      //     name: "Mary Doe",
      //     amount: 3000,
      //     date: "2020-01-03",
      //   },
      // ],
      transactions: [],
    };
  },
  created() {
    //fetch la thuc hien
    // fetch("http://localhost:3000/transactions")
    //   //khi do moi thuc hien th nay
    //   .then((response) => response.json())
    //   //khi do moi thuc hien th nay
    //   .then((data) => (this.transactions = data));
  },
  setup() {
    const transactions = ref([]);
    const error = ref(null);
    console.log(transactions, error);
    const fetchAll = async () => {
      try {
        const response = await fetch("http://localhost:3000/transactions");

        if (!response.ok)
          throw new Error("Something went wrong, please try again");

        transactions.value = await response.json();
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    fetchAll();
    // eslint-disable-next-line vue/no-dupe-keys
    return { transactions, error, fetchAll };
    // return { transactions };
  },
};
</script>
