const express = require("express");
const app = express();
const port = 3000;

// 引用路由文件
let chartLeftTop = require("./router/leftTop");
let chartLeftBottom = require("./router/leftBottom");
let chartRightTop = require("./router/rightTop");
let chartRightBottom = require("./router/rightBottom");
let chartMap = require("./router/map");

// 解决跨域
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
  next();
})

// 使用中间件来配置路由
app.use("/left-top", chartLeftTop);
app.use("/left-bottom", chartLeftBottom);
app.use("/right-top", chartRightTop);
app.use("/right-bottom", chartRightBottom);
app.use("/china", chartMap);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
