<template>
  <div id="app">
    <h1>app</h1>

    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isLogin: (state) => state.user.isLogin,
    }),
  },
  watch: {
    isLogin: {
      handler(newVal) {
        console.log("isLogin:", newVal);
        if (!newVal) {
          // 登录状态过期了，需要重新登录
          this.$router.push("/auth");
        }
      },
      immediate: true,
    },
  },
  created() {
    // 检查是否登录（登录是否过期）
    if (this.isLogin) {
      this.$store.dispatch("user/checkLogin");
    }
  },
};
</script>

<style scoped lang='scss'>
.nav {
  display: flex;
  a {
    list-style: none;
    text-decoration: none;
    color: #333;
    margin: 10px;
    &.router-link-active {
      color: green;
    }
  }
}
</style>