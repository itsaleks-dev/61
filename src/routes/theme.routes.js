const { Router } = require("express");
const themeController = require("../controllers/theme.controller");

const router = Router();
router.post("/theme", themeController.setTheme);
router.get("/theme", themeController.getTheme);

module.exports = router;
