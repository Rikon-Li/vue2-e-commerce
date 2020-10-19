import Vue from "vue";
import VueRouter from "vue-router";
import auth from "./authRoute";
import main from "./mainRoute";
import user from "./userRoute";
Vue.use(VueRouter);

const routes = [auth, main, user];

const router = new VueRouter({
  mode: "history",
  // base: "/pc",
  routes,
});

router.beforeEach((to, from, next) => {
  // 进入登录注册页面
  if (to.name === "Login" || to.name === "Register") {
    next();
    return;
  }
  // 其他页面
  const token = localStorage.getItem("token");
  if (!token) {
    //没有登录
    next({ name: "Auth" });
  } else {
    // 登录过，但是token是否还有效，需要进入后向后台验证。
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    // 需要认证权限
    const auth = to.meta.auth;
    const userType = localStorage.getItem("userType"); //这个值如果是首次获得，又可能不准确。需要在layout/Index.vue文件中再次监听，再次判断。
    const result = auth.find((item) => item === userType);
    if (result) {
      //可以进入
      next();
    } else {
      //不可以进入
      next("/403");
    }
  } else {
    // 无需认证权限
    next();
  }
});

export default router;
