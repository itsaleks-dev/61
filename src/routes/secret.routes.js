const { Router } = require("express");
const verifyJWT = require("../middlewares/jwt.middleware");

const router = Router();

router.get("/secret", verifyJWT, (req, res) => {
  res.send(`Hello ${req.user.username}`);
});

module.exports = router;
