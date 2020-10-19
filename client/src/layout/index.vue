<template>
  <a-layout id="layout" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <!-- 菜单 -->
      <app-menu />
    </a-layout-sider>
    <a-layout class="main">
      <!-- 头部 -->
      <app-header class="app-header"/>

      <!-- 内容 -->
      <a-layout-content class="app-content">
        <!-- 面包屑 -->
        <app-breadcrumb />

        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>

      <!-- 底部 -->
      <app-footer class="app-footer"/>

    </a-layout>
  </a-layout>
</template>

<script>
import { Layout } from "ant-design-vue";
import AppMenu from "./app-menu";
import AppHeader from "./app-header";
import AppBreadcrumb from "./app-breadcrumb";
import AppFooter from "./app-footer";
import { api, http } from "../request";
import { mapState } from 'vuex'
export default {
  components: {
    [Layout.name]: Layout,
    [Layout.Sider.name]: Layout.Sider,
    [Layout.Content.name]: Layout.Content,
    AppMenu,
    AppHeader,
    AppBreadcrumb,
    AppFooter,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapState({
      userType: state=>state.user.userInfo.type
    })
  },
  watch: {
    userType(newVal){
      // 解决刷新权限取得上一次的值，不准确的问题
      if(this.$route.meta.isAuth){
        const result = this.$route.meta.auth.find(item=>item===newVal);
        if(!result){
          this.$router.replace('/403');
        }
      }
    }
  },
  methods: {
    // 检查登录是否还有效
    requestCheckLogin() {
      http
        .get(api.CHECK_LOGIN_API)
        .then((data) => {
          // 检查登录成功
        })
        .catch((error) => {
          // 检查登录失败
          localStorage.removeItem("token");
          this.$router.push({ name: "Auth" });
        });
    },
  },
  created() {
    this.requestCheckLogin();
  },
};
</script>

<style>
#layout{
  height: 100%;
}
#layout .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.app-content{
  margin: 0 16px;
}
.main{
  display: block;
  flex: 1;
  position: relative;
  height: 100%;
  padding-top: 64px;
  overflow: auto;
}
.app-header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

</style>
