<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="(item, index) in navItems" :key="index">
          <router-link :to="{ name: item.name, params: {} }">
            <i class="text-2xl" :class="item.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      data-circle
      class="top-0 absolute left-1/2 transform translate-x-1/2"
    ></div>
    <div
      data-circle-inset
      @click="goToRoute"
      class="circle-inset absolute flex items-center justify-center bg-primary text-white w-12 h-12 rounded-full cursor-pointer -top-6 left-1/2 transform -translate-x-1/2"
    >
      <i class="fa-solid fa-plus"></i>
    </div>
  </footer>
</template>
<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const navItems = reactive([
      {
        icon: "fa-solid fa-list",
        text: "Home",
        name: "Home",
      },
      {
        icon: "fa-brands fa-rocketchat",
        text: "Report",
        name: "Report",
      },
      {
        icon: "fa-solid fa-chart-simple",
        text: "Budget",
        name: "Budget",
      },
      {
        icon: "fa-regular fa-user",
        text: "Profile",
        name: "Profile",
      },
    ]);
    const router = useRouter();
    function goToRoute() {
      router.push("/new-transaction");
    }
    return {
      navItems,
      goToRoute,
    };
  },
};
</script>
<style lang="css" scoped></style>
