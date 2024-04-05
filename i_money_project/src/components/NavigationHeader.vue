<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="w-10 h-10 overflow-hidden rounded-full"
          >
            <img
              class="w-full h-auto object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDOxxi5cFXN20_K76EDKxK_tYXcWPohALEk9jaPPZPA&s"
              size="sm"
              alt="User"
            />
          </div>
          <h1 class="text-xl font-bold text-dark ml-2">{{ meta.text }}</h1>
        </div>
        <div class="flex">
          <ul>
            <li class="text-2xl">
              <i class="fa-regular fa-bell"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { computed, reactive } from "vue";
import NAV_BOTTOM_ITEMS from "@/constatnts/index";
import { useRoute } from "vue-router";

export default {
  setup() {
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    const route = useRoute();
    return {
      navItems,
      meta: computed(() => route.meta),
    };
  },
};
</script>
<style lang="css" scoped>
footer#footer::before {
  background: #f8fafb;
  content: "";
  position: absolute;
  width: 60px;
  height: 30px;
  border-bottom-left-darius: 60px;
  border-bottom-right-darius: 60px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
footer#footer::after {
  position: absolute;
  background: #0012ff;
  content: "+"; /* Unicode character reference followed by the plus sign */
  font-family: "Nunito Sans", sans-serif; /* Use Nunito Sans font */
  font-size: 24px; /* Adjust font size as needed */
  display: flex;
  align-items: center;
  justify-items: center;
  color: white;
  width: 56px;
  height: 56px;
  top: -1.5rem;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
</style>
