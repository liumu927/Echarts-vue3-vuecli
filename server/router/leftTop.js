let express = require("express");
let router = express.Router();
let leftTopData = require("../mock/leftTop.json");

router.get("/data", (req, res) => {
  try {
    res.send({ msg: "我是 leftTop 的路由地址", chartData: leftTopData });
  } catch (error) {
    res.send("fail:", error);
  }
});

module.exports = router;
