import { createRouter, createWebHistory } from "vue-router";
// import About from "./pages/About.vue";
import Transaction from "./pages/transaction.vue";
import TransactionDetail from "./pages/transaction-detail.vue";
import NotFound from "./pages/NotFound.vue";
import Home from "./pages/home.vue";

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
