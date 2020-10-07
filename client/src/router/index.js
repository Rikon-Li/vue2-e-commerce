import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: () => import("../views/Home"),
    },
    {
      path: "/login",
      component: () => import("../views/Login"),
    },
    {
      path: "/register",
      component: () => import("../views/Register"),
    },
  ],
});

// 登录了才可以进入，没有登录只可以进入登录注册页面
router.beforeEach((to, from, next) => {
  if (to.path === "/home") {
    next("/login");
  } else {
    next();
  }
});

export default router;
