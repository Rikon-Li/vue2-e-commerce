const { Router } = require("express");
const Product = require("../model/Product");
const router = new Router();

// 添加商品
router.post("/add", async (req, res) => {
  await new Product(req.body).save();
  res.status(200).json({ code: 0, message: "添加成功" });
});

// 获取商品信息
router.get("/product_info", async (req, res) => {
  const result = await Product.find();
  // 响应
  res.status(200).json({ code: 0, message: "ok", data: result });
});

module.exports = router;
