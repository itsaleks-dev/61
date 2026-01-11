const { Router } = require("express");

const usersController = require("../controllers/users.controller");

const basicAuth = require("../middlewares/auth.middleware");
const validateUser = require("../middlewares/validate.middleware");

const router = Router();

router.use(basicAuth);
router.use(validateUser);

router.get("/", usersController.getUsers);
router.post("/", usersController.postUsers);

router.get("/:userId", usersController.getUserById);
router.put("/:userId", usersController.putUserById);
router.delete("/:userId", usersController.deleteUserById);

module.exports = router;
