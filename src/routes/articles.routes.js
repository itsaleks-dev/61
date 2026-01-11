const { Router } = require("express");

const articlesController = require("../controllers/articles.controller");

const checkArticleAccess = require("../middlewares/articleAccess.middleware");

const router = Router();

router.use(checkArticleAccess);

router.get("/", articlesController.getArticles);
router.post("/", articlesController.postArticles);

router.get("/:articleId", articlesController.getArticleById);
router.put("/:articleId", articlesController.putArticleById);
router.delete("/:articleId", articlesController.deleteArticleById);

module.exports = router;
