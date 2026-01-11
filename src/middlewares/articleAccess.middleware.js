function checkArticleAccess(req, res, next) {
  const token = req.headers["x-article-token"];
  if (!token) {
    return res.status(403).send("Forbidden. No article access token.");
  }
  next();
}

module.exports = checkArticleAccess;
