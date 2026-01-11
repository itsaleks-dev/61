const { Router } = require("express");

const usersController = require("../controllers/users.controller");
const basicAuth = require("../middlewares/auth.middleware");
const validateUser = require("../middlewares/validate.middleware");

const router = Router();

router.get("/", usersController.getUsers);
router.get("/:userId", usersController.getUserById);

router.post("/", basicAuth, validateUser, usersController.postUsers);
router.put("/:userId", basicAuth, validateUser, usersController.putUserById);
router.delete("/:userId", basicAuth, usersController.deleteUserById);

module.exports = router;
