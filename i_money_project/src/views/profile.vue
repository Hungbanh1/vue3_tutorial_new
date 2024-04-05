<template>
  <navigation-header></navigation-header>

  <!-- Start info -->
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDOxxi5cFXN20_K76EDKxK_tYXcWPohALEk9jaPPZPA&s"
            alt="User"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>
  <!-- Start menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul class="">
            <li
              class=""
              v-for="(item, index) in profileOptions"
              :key="item.name"
            >
              <router-link
                class="flex justify-between items-center py-3"
                :to="item.route"
              >
                <div
                  class="flex items-center text-left"
                  :class="{ 'text-red': index === profileOptions.length - 1 }"
                >
                  <i class="" :class="item.icon"></i>
                  <h5 class="font-semibold ml-3">{{ item.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <navigation-bottom></navigation-bottom>
</template>
<script>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constatnts";
import { useUser } from "@/composables/useUser";
import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
export default {
  name: "ProfileLayout",
  components: {
    NavigationBottom,
    NavigationHeader,
  },
  setup() {
    //react kh bh h thay the du lieu
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { getUser } = useUser();
    const { user } = getUser();
    return {
      profileOptions,
      user,
      NavigationBottom,
      NavigationHeader,
    };
  },
};
</script>
