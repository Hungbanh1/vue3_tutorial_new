import { defineAsyncComponent } from "vue";
// import { DefaultLayout } from "@/layouts/default.vue";
// import { AuthLayout } from "@/layouts/auth.vue";
// Hàm này đăng ký các thành phần toàn cục trong ứng dụng Vue của bạn
export function registerGlobalComponents(app) {
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default.vue"))
  );

  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth.vue"))
  );
}
