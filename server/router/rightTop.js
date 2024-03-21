let express = require("express");
let router = express.Router();
let rightTopData = require("../mock/rightTop.json");

router.get("/data", (req, res) => {
  try {
    res.send({ msg: "我是 rightTop 的路由地址", chartData: rightTopData });
  } catch (error) {
    res.send("fail:", error);
  }
});

module.exports = router;