<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item v-for="(item, index) in list" :key="index">{{
      $t(item)
    }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { Breadcrumb } from "ant-design-vue";
export default {
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [Breadcrumb.Item.name]: Breadcrumb.Item,
  },
  computed: {
    list() {
      return this.$route.matched
        .map((item) => item.meta.languagekey)
        .filter((item) => item);
    },
  },
};
</script>

<style>
</style>