const express = require("express");
const logRequests = require("./middlewares/logger.middleware");

const indexRoutes = require("./routes/index.routes");
const usersRoutes = require("./routes/users.routes");
const articlesRoutes = require("./routes/articles.routes");

const app = express();
app.use(logRequests);

app.use(express.json());

app.use("/", indexRoutes);
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

module.exports = app;
