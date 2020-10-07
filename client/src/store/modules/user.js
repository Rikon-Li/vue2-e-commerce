import axios from "axios";
export default {
  namespaced: true,
  state: {
    // 是否登录，取上一次退出的状态，如果没有值就是false
    isLogin: Boolean(Number(localStorage.getItem("isLogin"))),
  },
  mutations: {
    setIsLogin(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {
    // 修改登录状态，需要同步localstorage
    changeLoginAction(context, payload) {
      if (payload) {
        localStorage.setItem("isLogin", 1);
      } else {
        localStorage.setItem("isLogin", 0);
      }
      context.commit("setIsLogin", payload);
    },
    checkLogin(context, payload) {
      // 检查用户是否登录
      axios.get("/api/user/check_login").then((data) => {
        if (data.data.code === 0) {
          // 登录没有过期
          localStorage.setItem("isLogin", 1);
          // 修改仓库数据
          context.commit("setIsLogin", true);
        } else {
          // 没有登录，或者登录过期
          context.commit("setIsLogin", false);
        }
      });
    },
  },
};
