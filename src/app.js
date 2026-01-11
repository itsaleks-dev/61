const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logRequests = require("./middlewares/logger.middleware");

const indexRoutes = require("./routes/index.routes");
const usersRoutes = require("./routes/users.routes");
const themeRoutes = require("./routes/theme.routes");
const authRoutes = require("./routes/auth.routes");
const articlesRoutes = require("./routes/articles.routes");
const secretRoutes = require("./routes/secret.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "public/favicon.ico"));
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.engine("ejs", require("ejs").renderFile);

app.use(logRequests);

app.use("/", themeRoutes);
app.use("/", authRoutes);
app.use("/", indexRoutes);
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);
app.use("/", secretRoutes);

module.exports = app;
