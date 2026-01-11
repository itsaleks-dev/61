const jwt = require("jsonwebtoken");
const SECRET = "supersecret";

function verifyJWT(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Not authorized");

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user;
    next();
  });
}

module.exports = verifyJWT;
