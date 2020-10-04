var dbconn = require("../controllers/db_connect");

function get_invoice(req, res) {
  dbconn.query(
    "select tp.proid, tp.proname, tp.qty, tu.unitname, tp.order_price, tp.wholesale_price from tb_product tp, tb_unit tu where tp.unitid = tu.unitid",
    (err, resu) => {
      if (err) return res.status(400).json(err);
      return res.status(201).json(resu);
    }
  );
}

module.exports = { get_invoice };
