<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <!-- 菜单 -->
      <app-menu />
    </a-layout-sider>
    <a-layout>
      <!-- 头部 -->
      <app-header/>

      <!-- 内容 -->
      <a-layout-content style="margin: 0 16px">
        <!-- 面包屑 -->
        <app-breadcrumb />

        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view/>
        </div>
      </a-layout-content>

      <!-- 底部 -->
      <app-footer />
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout } from "ant-design-vue";
import AppMenu from "./app-menu";
import AppHeader from "./app-header";
import AppBreadcrumb from "./app-breadcrumb";
import AppFooter from "./app-footer";
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
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
