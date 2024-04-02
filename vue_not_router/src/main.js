import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import diy from "./diy";
createApp(App).provide("diy", diy).use(router).use(store).mount("#app");
