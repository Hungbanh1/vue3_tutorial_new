<template>
  <h1>Transaction</h1>
  <div class="item" v-for="item in transactions" :key="item.id">
    <!-- <router-link :to="`/transaction/${item.id}`">{{ item.name }}</router-link> -->
    <router-link
      :to="{ name: 'transaction-detail', params: { id: item.id } }"
      >{{ item.name }}</router-link
    >
    <!-- <h2>{{ item.id }}</h2>
    <h2>{{ item.name }}</h2> -->
    <p>{{ item.description }}</p>
    <p>{{ item.title }}</p>
    <p>{{ item.amount }}</p>
  </div>
</template>

<script>
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
    fetch("http://localhost:3000/transactions")
      //khi do moi thuc hien th nay
      .then((response) => response.json())
      //khi do moi thuc hien th nay
      .then((data) => (this.transactions = data));
  },
};
</script>
