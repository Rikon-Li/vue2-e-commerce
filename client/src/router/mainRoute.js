/* 
A 管理员
B 售前
C 售后
D 运营
E 财务
*/
export default {
  path: "/",
  component: () => import("../layout/Index"),
  children: [
    // 系统首页
    {
      path: "",
      name: "home",
      component: () => import("../views/home/Home"),
      meta: {
        //路由的数据
        icon: "home",
        title: "系统首页",
        languagekey: "home",
        isAuth: false,
      },
    },
    // 商品管理
    {
      path: "goods-manage",
      name: "goods-manage",
      component: {
        //直接提供组件的render函数，不需要vue文件了。
        render: (h) => <router-view />,
      },
      meta: {
        icon: "shopping",
        title: "商品管理",
        languagekey: "goods-manage",
        isAuth: true,
        auth: ["A", "B", "C"],
      },
      children: [
        // 商品列表
        {
          path: "goods-list",
          name: "goods-list",
          component: () => import("../views/goods/GoodsList"),
          meta: {
            title: "商品列表",
            languagekey: "goods-list",
            isAuth: true,
            auth: ["A", "C", "E"],
          },
        },
        // 新增商品
        {
          path: "goods-add",
          name: "goods-add",
          component: () => import("../views/goods/GoodsAdd"),
          meta: {
            title: "售后管理",
            languagekey: "goods-add",
            isAuth: true,
            auth: ["A", "C"],
          },
        },
      ],
    },
    // 订单管理
    {
      path: "order-manage",
      name: "order-manage",
      component: {
        //直接提供组件的render函数，不需要vue文件了。
        render: (h) => <router-view />,
      },
      redirect: "/order-manage/goods-order",
      meta: {
        title: "订单管理",
        languagekey: "order-manage",
        isAuth: true,
        auth: ["A", "C", "E"],
      },
      children: [
        // 商品订单
        {
          path: "goods-order",
          name: "goods-order",
          component: () => import("../views/order/GoodsOrder"),
          meta: {
            title: "商品订单",
            languagekey: "goods-order",
            isAuth: true,
            auth: ["A", "C", "E"],
          },
        },
        // 售后管理
        {
          path: "after-sale",
          name: "after-sale",
          component: () => import("../views/order/AfterSale"),
          meta: {
            title: "售后管理",
            languagekey: "after-sale",
            isAuth: true,
            auth: ["A", "C"],
          },
        },
      ],
    },
    // 评价管理
    {
      path: "comment-manage",
      name: "comment-manage",
      component: () => import("../views/comment/Manage"),
      meta: {
        title: "评价管理",
        languagekey: "comment-manage",
        isAuth: true,
        auth: ["A", "C", "D"],
      },
    },
    // 活动管理
    {
      path: "activity-manage",
      name: "activity-manage",
      component: () => import("../views/activity/Manage"),
      meta: {
        title: "活动管理",
        languagekey: "activity-manage",
        isAuth: false,
      },
    },
    // 平台管理
    {
      path: "platform-manage",
      name: "platform-manage",
      component: {
        //直接提供组件的render函数，不需要vue文件了。
        render: (h) => <router-view />,
      },
      redirect: "/platform-manage/category-setting",
      meta: {
        title: "平台管理",
        languagekey: "platform-manage",
        isAuth: true,
        auth: ["A", "D"],
      },
      children: [
        // 分类设置
        {
          path: "category-setting",
          name: "category-setting",
          component: () => import("../views/platform/CategorySetting"),
          meta: {
            title: "分类设置",
            languagekey: "category-setting",
            isAuth: true,
            auth: ["A", "D"],
          },
        },
        // 焦点图
        {
          path: "focus-map",
          name: "focus-map",
          component: () => import("../views/platform/FocusMap"),
          meta: {
            title: "焦点图",
            languagekey: "focus-map",
            isAuth: true,
            auth: ["A", "D"],
          },
        },
        // 运费模版
        {
          path: "freight-template",
          name: "freight-template",
          component: () => import("../views/platform/FreightTemplate"),
          meta: {
            title: "运费模版",
            languagekey: "freight-template",
            isAuth: true,
            auth: ["A", "D"],
          },
        },
      ],
    },
    // 会员管理
    {
      path: "vip-manage",
      name: "vip-manage",
      component: () => import("../views/vip/Manage"),
      meta: {
        title: "会员管理",
        languagekey: "vip-manage",
        isAuth: true,
        auth: ["A", "B", "C"],
      },
    },
    // 数据统计
    {
      path: "data-statistics",
      name: "data-statistics",
      component: () => import("../views/data/Statistics"),
      meta: {
        title: "数据统计",
        languagekey: "data-statistics",
        isAuth: true,
        auth: ["A", "C", "D", "E"],
      },
    },
    // 权限管理
    {
      path: "rights-manage",
      name: "rights-manage",
      component: () => import("../views/rights/Manage"),
      meta: {
        title: "权限管理",
        languagekey: "rights-manage",
        isAuth: true,
        auth: ["A"],
      },
    },
  ],
};
