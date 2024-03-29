<template>
  <h1>Transactions detail {{ $route.params.id }}</h1>
  <!-- <p>{{ $route }}</p> -->
  <div v-if="transaction" class="">
    <h3>name là :{{ transaction.name }}</h3>
    <h3>title là :{{ transaction.title }}</h3>
  </div>
</template>
<script>
export default {
  name: "App",

  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      //khi do moi thuc hien th nay
      .then((response) => response.json())
      //khi do moi thuc hien th nay
      .then((data) => (this.transaction = data))
      .then(() => console.log(this.transaction));
  },
};
</script>
