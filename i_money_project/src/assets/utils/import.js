import { defineAsyncComponent } from "vue";

// Hàm này đăng ký các thành phần toàn cục trong ứng dụng Vue của bạn
export function registerGlobalComponents(app) {
  // Đăng ký thành phần 'auth-layout'
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth"))
  );

  // Đăng ký thành phần 'main-layout'
  app.component(
    "main-layout", // Đã cập nhật tên từ "default-layout" thành "main-layout"
    defineAsyncComponent(() => import("@/layouts/default"))
  );
}
