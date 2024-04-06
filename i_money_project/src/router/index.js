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
    meta: {
      layout: "default",
      leading: true,
      text: "halo",
      isShowFooter: true,
    },
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
    meta: {
      text: "Profile",
      leading: false,
      layout: "auth",
      isShowFooter: true,
    },
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
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/*webpackChunkName:"Logout" */ "@/views/report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/*webpackChunkName:"Logout" */ "@/views/budget.vue"),
  },
  {
    path: "/new-transaction",
    name: "New-transaction",
    meta: {
      text: "New-transaction",
      leading: false,
      isShowFooter: false,
    },
    component: () =>
      import(/*webpackChunkName:"Logout" */ "@/views/new-transaction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
