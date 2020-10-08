<template>
  <a-layout-header class="header">
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['2']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">{{ username }}</a-menu-item>
      <a-menu-item key="2" @click="logoutAction">退出登录</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import axios from "axios";
import { Layout, Menu } from "ant-design-vue";
export default {
  data() {
    return {
      username: "",
    };
  },
  components: {
    [Layout.Header.name]: Layout.Header,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
  },
  methods: {
    logoutAction() {
      axios.get("/api/user/logout").then((data) => {
        this.$store.dispatch("user/changeLoginAction", false);
      });
    },
  },
  created() {
    axios.get("api/user/user_info").then((data) => {
      this.username = data.data.data.username;
      console.log(data.data.data.username);
    });
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
}
</style>