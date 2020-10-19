const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

// 假设服务器需要部署多个项目
// 那么要求每个项目有自己的路径。

// app.use('/css', express.static(path.join(__dirname, './www/css')));
// app.use('/js', express.static(path.join(__dirname, './www/js')));
// app.use('/pc/static', express.static(path.join(__dirname, './www')));

app.use("/api/user", require("./routers/userRouter"));
app.use("/api/product", require("./routers/productRouter"));

// 对于不能匹配的路径，统一响应html页面。因为前端路由使用的history模式，刷新需要响应html页面。html页面加载了js之后，路由才起作用。
// app.use('/pc', (req, res)=>{
//   res.sendFile(path.join(__dirname, './www/index.html'));
// });

module.exports = app;
