<template>
  <div class="screen">
    <h1>Interact Component</h1>
    <Card></Card>
  </div>
</template>

<script>
import Card from "./CardScreen.vue";
export default {
  components: {
    Card,
  },
  props: {
    title: String,
    content: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
