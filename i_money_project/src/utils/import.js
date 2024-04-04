import { defineAsyncComponent } from "vue";
import { DefaultLayout } from "@/layouts/default.vue";
import { AuthLayout } from "@/layouts/default.vue";
// Hàm này đăng ký các thành phần toàn cục trong ứng dụng Vue của bạn
export function registerGlobalComponents(app) {
  // Đăng ký thành phần 'auth-layout'
  app.component(
    "auth-layout",
    defineAsyncComponent(() => AuthLayout)
  );

  // Đăng ký thành phần 'main-layout'
  app.component(
    "default-layout", // Đã cập nhật tên từ "default-layout" thành "main-layout"
    defineAsyncComponent(() => DefaultLayout)
  );
}
