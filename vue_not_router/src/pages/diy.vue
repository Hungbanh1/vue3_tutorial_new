<template>
  <h1>diy here</h1>
  <button @click="console.log(diy)">Show me</button>
</template>

<script>
export default {
  //muon xai ham` nao thi inject vao
  inject: ["diy"],
  created() {
    // console.log(diy);
  },
};
</script>
