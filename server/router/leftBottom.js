let express = require("express");
let router = express.Router();
let leftBottomData = require("../mock/leftBottom.json");

router.get("/data", (req, res) => {
  try {
    res.send({ msg: "我是 leftBottom 的路由地址", chartData: leftBottomData });
  } catch (error) {
    res.send("fail:", error);
  }
});

module.exports = router;
