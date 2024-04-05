import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/config/firebase";

const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  // console.log("Before", user);
  if (!user) next({ name: "Login", params: {} });
  else next();
};
const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "default" },
    component: () => import(/*webpackChunkName:"Index" */ "@/views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: { layout: "auth" },
    component: () =>
      import(/*webpackChunkName:"Register" */ "@/views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "auth" },
    component: () => import(/*webpackChunkName:"Login" */ "@/views/login.vue"),
  },

  {
    path: "/profile",
    name: "Profile",
    meta: { layout: "auth" },
    component: () =>
      import(/*webpackChunkName:"Login" */ "@/views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    meta: { layout: "auth" },
    component: () =>
      import(/*webpackChunkName:"Logout" */ "@/views/logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
