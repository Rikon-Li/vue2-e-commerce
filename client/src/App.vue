<template>
  <div id="app">
    <h1>app</h1>
    <nav class="nav">
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Login from "./views/Login";
import Register from "./views/Register";
export default {
  components: {
    Login,
    Register,
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