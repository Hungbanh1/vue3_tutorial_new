<template>
  <h1>Store layout</h1>
</template>

<script>
export default {
  data() {
    return {
      //   count: 0,
      transactions: [],
    };
  },
  created() {
    console.log(this.$store.state.count);
  },
};
</script>
