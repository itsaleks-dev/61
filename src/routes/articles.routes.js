const { Router } = require("express");
const articlesController = require("../controllers/articles.controller");
const checkArticleAccess = require("../middlewares/articleAccess.middleware");

const router = Router();

router.get("/", articlesController.getArticles);
router.get("/:articleId", articlesController.getArticleById);

router.post("/", checkArticleAccess, articlesController.postArticles);
router.put("/:articleId", checkArticleAccess, articlesController.putArticleById);
router.delete("/:articleId", checkArticleAccess, articlesController.deleteArticleById);

module.exports = router;
