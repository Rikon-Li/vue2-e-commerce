const mongoose = require("mongoose");

module.exports = mongoose.model("user", {
  // 账号
  username: {
    type: String,
    required: true,
  },
  // 密码
  password: {
    type: String,
    default: "123456",
  },
  // 姓名
  nickname: {
    type: String,
  },
  // 手机号
  phonenumber: {
    type: String,
  },
  // 职位
  job: {
    type: String,
  },
  // 权限
  auth: {
    type: Array,
    default: [],
  },
  // 是否是管理员
  isAdmin: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
  },
  /* A  店主
B  售前
C  售后
D  财务
E  运营 */
});
