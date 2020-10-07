import Router from "vue-router";
import Vue from "vue";
import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/auth",
      name: "auth",
      redirect: "/auth/login",
      component: () => import("../views/auth/Auth"),
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("../views/auth/Login"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("../views/auth/Register"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../layout/Index"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/Home"),
        },
        {
          path: "product",
          name: "product",
          component: () => import("../views/Product"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "login" || to.name === "register") {
    // 登录注册页面
    next();
  } else {
    // 进入项目
    // 判断是否有权限
    if (store.state.user.isLogin) {
      next();
    } else {
      next("/auth");
    }
  }
});

export default router;
