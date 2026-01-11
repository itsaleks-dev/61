const jwt = require("jsonwebtoken");
const SECRET = "supersecret";

function register(req, res) {
  const { username } = req.body;
  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true });
  res.send("User registered");
}

function login(req, res) {
  const { username } = req.body;
  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true });
  res.send("User logged in");
}

module.exports = { register, login };
