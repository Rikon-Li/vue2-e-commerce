const { model } = require("mongoose");

module.exports = model("goods", {
  title: {
    type: String,
    required: true,
  },
  sales: {
    type: String,
  },
  cate: {
    type: String,
  },
  price: {
    type: String,
  },
  simg: {
    type: Array,
  },
  originPrice: {
    type: String,
  },
  store: {
    type: String,
  },
  freight: {
    type: String,
  },
  pic: {
    type: String,
  },
});
