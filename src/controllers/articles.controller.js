function getArticles(req, res) {
  const articles = [
    { id: 101, title: "Node Basics" },
    { id: 102, title: "Express MVC" },
  ];
  res.render("articles.ejs", { articles });
}

function getArticleById(req, res) {
  const { articleId } = req.params;
  res.render("article-details.ejs", { articleId });
}

function postArticles(req, res) {
  res.send("Post articles route");
}

function putArticleById(req, res) {
  const { articleId } = req.params;
  res.send(`Put article by Id route: ${articleId}`);
}

function deleteArticleById(req, res) {
  const { articleId } = req.params;
  res.send(`Delete article by Id route: ${articleId}`);
}

module.exports = {
  getArticles,
  postArticles,
  getArticleById,
  putArticleById,
  deleteArticleById,
};
