var express = require("express");
var router = express.Router();
var { get_invoice } = require("./invoice");
var guard = require("../controllers/check_token");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/get/invoice", guard, get_invoice);

module.exports = router;
