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

// 修改商品
router.post("/edit", async (req, res) => {
  // console.log(req.body._id);
  const result = await Product.findByIdAndUpdate(req.body._id, {
    title: req.body.title,
    cate: req.body.cate,
    price: req.body.price,
    originPrice: req.body.originPrice,
    sales: req.body.sales,
    store: req.body.store,
    freight: req.body.freight,
  }).catch((error) => {
    console.log(error);
  });
  // console.log("product: ", product);
  res.status(200).json({
    _id: req.body._id,
    title: req.body.title,
    cate: req.body.cate,
    price: req.body.price,
    originPrice: req.body.originPrice,
    sales: req.body.sales,
    store: req.body.store,
    freight: req.body.freight,
    code: 0,
    message: "ok",
    data: result,
  });
});

router.post("/delete", async (req, res) => {
  console.log(req.body);
  const result = await Product.findByIdAndDelete(req.body._id).catch((error) => {
    console.log(error);
  });
  console.log(result);
  res.status(200).json({ code: 0, message: "ok", data: result });
});

module.exports = router;
