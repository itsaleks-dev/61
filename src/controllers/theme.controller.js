function setTheme(req, res) {
  const { theme } = req.body;
  res.cookie("theme", theme, { maxAge: 1000 * 60 * 60 * 24 * 30 });
  res.send("Theme saved");
}

function getTheme(req, res) {
  const theme = req.cookies.theme || "light";
  res.send(`Current theme: ${theme}`);
}

module.exports = { setTheme, getTheme };
