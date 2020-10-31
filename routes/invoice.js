var dbconn = require("../controllers/db_connect");

function get_invoice(req, res) {
  dbconn.query("select * from tb_invoice where status = 0", (err, resu) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json(resu);
  });
}

function get_invioce_detail(req, res) {
  dbconn.query(
    "select tp.proname, tid.qty, tp.unitid , tu.unitname from tb_invoice_detail tid, tb_product tp, tb_unit tu where tid.proid = tp.proid and tp.unitid = tu.unitid and invid = ?",
    [req.params.invid],
    (err, resu) => {
      if (err) return res.status(500).json(err);
      dbconn.query(
        "update tb_invoice set status = 1 where invid = ?",
        [req.params.invid],
        (err) => {
          if (err) return res.status(500).json(err);
          return res.json(resu);
        }
      );
    }
  );
}

function update_status(req, res) {
  dbconn.query(
    "update tb_invoice set status = 2 where invid = ?",
    [req.body.invid],
    (err, resu) => {
      if (err) return res.status(500).json(err);
      return res.json(resu);
    }
  );
}

module.exports = { get_invoice, get_invioce_detail, update_status };
