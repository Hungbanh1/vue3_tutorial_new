import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index.vue"),
    meta: { layout: "default" },
    // meta: "default",
  },
  {
    path: "/register",
    name: "Register",
    meta: { layout: "auth" },
    component: () => import("@/views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login.vue"),

    meta: { layout: "auth" },
  },
  // {
  //   path: "/default",
  //   name: "Default",
  //   component: () => import("@/layouts/default.vue"),
  // },

  {},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
