<template>
  <div>
    <h1>首页</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    // 请求用户信息
    axios
      .get("/api/user/user_info")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>