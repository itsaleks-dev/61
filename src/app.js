const express = require("express");
const path = require("path");
const logRequests = require("./middlewares/logger.middleware");

const indexRoutes = require("./routes/index.routes");
const usersRoutes = require("./routes/users.routes");
const articlesRoutes = require("./routes/articles.routes");

const app = express();

app.use(logRequests);
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.engine("ejs", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, "views")));

app.use("/", indexRoutes);
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

module.exports = app;
