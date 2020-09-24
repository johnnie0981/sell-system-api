var dbconn = require("../controllers/db_connect");

function get_invoice(req, res) {
  dbconn.query(
    "SELECT tp.proid, tp.proname, tc.catename , ts.sale_price, ts.qty, tu.unitname FROM tb_product tp , tb_stock ts, tb_unit tu, tb_category tc WHERE tp.proid = ts.proid AND ts.unitid = tu.unitid AND tc.cateid = tp.cateid ORDER BY tp.cateid",
    (err, resu) => {
      if (err) return res.status(400).json(err);
      return res.status(201).json(resu);
    }
  );
}

module.exports = { get_invoice };
