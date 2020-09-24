const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["actk"];
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err) {
        //console.log(err.message);
        return res.status(401).send({
          error: true,
          message: "Unauthorized access.",
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      error: true,
      message: "No token provided.",
    });
  }
};
