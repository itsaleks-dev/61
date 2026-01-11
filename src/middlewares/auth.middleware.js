function basicAuth(req, res, next) {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(401).send("Access denied. No credentials sent.");
  }
  next();
}

module.exports = basicAuth;
