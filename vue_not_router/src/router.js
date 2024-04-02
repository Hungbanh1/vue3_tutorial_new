import { createRouter, createWebHistory } from "vue-router";
// import About from "./pages/About.vue";
import Transaction from "./pages/transaction.vue";
import TransactionDetail from "./pages/transaction-detail.vue";
import NotFound from "./pages/NotFound.vue";
import Home from "./pages/home.vue";
import Store from "./pages/store.vue";
import Diy from "./pages/diy.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/transaction",
    name: "transaction-route",
    component: Transaction,
  },
  {
    path: "/store",
    name: "store-route",
    component: Store,
  },
  {
    path: "/diy",
    name: "diy-route",
    component: Diy,
  },
  {
    path: "/transaction/:id",
    name: "transaction-detail",
    component: TransactionDetail,
  },
  {
    // path: "/transaction/:id",
    path: "/ts",
    redirect: "/transaction",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
