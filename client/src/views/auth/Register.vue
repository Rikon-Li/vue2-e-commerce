<template>
  <div id="register">
    <h1>注册</h1>
    <input type="text" placeholder="账号" v-model="username" />
    <input type="text" placeholder="确认密码" v-model="password" />
    <button @click="confirmAction">注册</button>
  </div>
</template>

<script>
import { http, api } from "../../request";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async confirmAction() {
      // 注册请求
      const data = await http.post(api.REGISTER_API, {
        username: this.username,
        password: this.password,
      });
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>