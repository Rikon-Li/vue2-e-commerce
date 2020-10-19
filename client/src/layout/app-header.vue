<template>
  <a-layout-header class="header">
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['2']"
      :style="{ lineHeight: '64px' }"
      @click="handleMenuClickAction"
    >
      <a-sub-menu key="language">
        <span slot="title">
          <span>多语言</span>
        </span>
        <a-menu-item v-for="subItem in languageList" :key="subItem.value">
          <span>{{ subItem.name }}</span>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item key="username">{{ userInfo.username }}</a-menu-item>
      <a-menu-item key="logout">退出</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { Layout, Menu } from "ant-design-vue";
import { mapState } from "vuex";
export default {
  components: {
    [Layout.Header.name]: Layout.Header,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu,
  },
  data() {
    return {
      languageList: [
        { name: "English", value: "en-US" },
        { name: "中文", value: "zh-CN" },
      ],
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  },
  methods: {
    handleMenuClickAction({ key, keyPath }) {
      // 退出操作
      if (key === "logout") {
        localStorage.removeItem("token");
        this.$router.push({ name: "Auth" });
      }
      //个人中心
      else if (key === "username") {
        this.$router.push({ name: "user" });
      }
      //切换语言
      else if (keyPath.length > 1) {
        if (keyPath[1] === "language") {
          // 切换
          this.$i18n.locale = key;
          // 保存选择的语言
          localStorage.setItem("language", key);
        }
      }
    },
  },
  created() {
    //请求用户信息
    this.$store.dispatch("user/requestUserInfo");
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  z-index: 10;
}
</style>