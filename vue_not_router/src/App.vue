<template>
  <h1>Hello Dom</h1>
  <router-view></router-view>
  <Navbar></Navbar>
</template>

<script>
import Navbar from "./components/Nav.vue";
// import homeView from "./components/pages/home.vue";
export default {
  name: "App",
  components: { Navbar },
  created() {
    console.log(document.querySelector("h1"));
  },
  mounted() {
    console.log(document.querySelector("h1"));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
