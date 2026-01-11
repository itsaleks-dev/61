function validateUser(req, res, next) {
  if (req.method === "POST" || req.method === "PUT") {
    const { username, password } = req.body || {};

    if (!username || !password) {
      return res.status(400).send("Missing required fields: username and password");
    }
  }
  next();
}

module.exports = validateUser;
