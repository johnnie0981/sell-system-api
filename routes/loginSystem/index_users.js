var express = require("express");
var router = express.Router();
var dbcon = require("../../controllers/db_connect");
var jwt = require("jsonwebtoken");

/* GET users listing. */
router.post("/login", async function (req, res, next) {
  var body = req.body;
  dbcon.query(
    "SELECT * FROM tb_user WHERE username = ?",
    [body.username],
    (err, resu) => {
      if (err) throw err;
      if (resu[0] === undefined) return res.json({ stt: "No User" });
      if (resu[0].password === body.password) {
        let playload = {
          usn: resu[0].username,
          emid: resu[0].emid,
          ust: resu[0].usertype,
        };
        let acess_token = jwt.sign(playload, process.env.SECRET, {
          expiresIn: "1d",
        });
        return res.status(201).json({ token: acess_token });
      } else return res.json({ stt: "Password not match" });
    }
  );
});

module.exports = router;
