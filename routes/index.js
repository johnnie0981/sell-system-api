var express = require("express");
var router = express.Router();
var { get_invoice } = require("./invoice");
var { get_invioce_detail } = require("./invoice");
var guard = require("../controllers/check_token");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/get/invoice", guard, get_invoice);

router.get("/get/invoice_detail/:invid", guard, get_invioce_detail);

module.exports = router;
