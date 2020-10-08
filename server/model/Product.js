const { model } = require("mongoose");

module.exports = model("goods", {
  title: {
    type: String,
    required: true,
  },
  sales: {
    type: String,
    default: 0,
  },
  cate: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  originPrice: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  freight: {
    type: String,
    default: 0,
  },
  pic: {
    type: String,
    default: "https://i.loli.net/2020/10/08/HJUcQg42slo6vyz.gif",
  },
  simg: {
    type: Array,
    default: ["https://i.loli.net/2020/10/08/HJUcQg42slo6vyz.gif"],
  },
});
