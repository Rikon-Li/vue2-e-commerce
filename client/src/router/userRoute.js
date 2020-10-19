export default {
  path: "/",
  component: () => import("../layout/Index"),
  children: [
    // 个人中心
    {
      path: "user",
      name: "user",
      component: () => import("../views/user/UserCenter")
    },
    //403
    {
      path: '403',
      name: '403',
      component: ()=>import('../views/common/Forbidden')
    }
  ]
};
