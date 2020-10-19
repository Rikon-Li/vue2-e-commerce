<template>
  <a-menu
    theme="dark"
    mode="inline"
    @click="changeRouteAction"
    :defaultSelectedKeys="[selectKey]"
    :defaultOpenKeys="openKeys"
  >
    <template v-for="item in menuData">
      <!-- 二级目录 -->
      <a-sub-menu
        v-if="item.children && item.children.length > 0"
        :key="item.name"
      >
        <span slot="title">
          <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
          <span>{{ $t(item.meta.languagekey) }}</span>
        </span>
        <a-menu-item v-for="subItem in item.children" :key="subItem.name">
          <span>{{ $t(subItem.meta.languagekey) }}</span>
        </a-menu-item>
      </a-sub-menu>
      
      <!-- 一级目录 -->
      <a-menu-item v-else :key="item.name">
        <a-icon v-if="item.meta.icon" :type="item.meta.icon" />
        <span>{{ $t(item.meta.languagekey) }}</span>
      </a-menu-item>

    </template>
  </a-menu>
</template>

<script>
import { Menu, Icon } from "ant-design-vue";
import mainRoute from "../router/mainRoute";
export default {
  components: {
    [Icon.name]: Icon,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    [Menu.SubMenu.name]: Menu.SubMenu,
  },
  data() {
    return {
      menuData: mainRoute.children,
      selectKey: this.$route.name,
    };
  },
  computed: {
    openKeys(){
      const index = this.$route.matched.findIndex(item=>item.name === this.$route.name);
      if(index === 1){
        //一级目录
        return [];
      }
      else{
        //二级目录
        return [this.$route.matched[1].name];
      }
    }
  },
  methods: {
    changeRouteAction({ key }) {
      this.$router.push({ name: key });
    },
  }
};
</script>

<style>
</style>