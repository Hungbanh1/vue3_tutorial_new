<template>
  <div class="copyright">
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

<style scoped>
.copyright {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5rem;
  color: var(--light);
  z-index: 3;
  font-size: 1.5rem;
}
.copyright a {
  color: #f4dc26;
}
</style>
