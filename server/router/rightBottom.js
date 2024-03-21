let express = require("express");
let router = express.Router();
let rightBottomData = require("../mock/rightBottom.json");

router.get("/data", (req, res) => {
  try {
    res.send({ msg: "我是 rightBottom 的路由地址", chartData: rightBottomData });
  } catch (error) {
    res.send("fail:", error);
  }
});

module.exports = router;