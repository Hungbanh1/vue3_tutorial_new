<template>
  <div>
    <h1>{{ title }}</h1>
    <p>
      This game owned by RHP Team in Vue 3 course for begginers -
      <a href="http://">view here</a>
    </p>
  </div>
</template>

<script>
export default {
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
