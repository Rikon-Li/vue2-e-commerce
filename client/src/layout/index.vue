<template>
  <div id="layout">
    <header>
      <h1>头部</h1>
      <button @click="logoutAction">退出登录</button>
    </header>
    <nav>菜单栏</nav>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    logoutAction() {
      axios.get("/api/user/logout").then((data) => {
        this.$store.dispatch("user/changeLoginAction", false);
      });
    },
  },
};
</script>

<style>
</style>