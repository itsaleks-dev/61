function getUsers(req, res) {
  const users = [
    { id: 1, username: "alex" },
    { id: 2, username: "john" },
  ];
  res.render("users.pug", { users });
}

function getUserById(req, res) {
  const { userId } = req.params;
  res.render("user-details.pug", { userId });
}

function postUsers(req, res) {
  res.send("Post users route");
}

function putUserById(req, res) {
  const { userId } = req.params;
  res.send(`Put user by Id route: ${userId}`);
}

function deleteUserById(req, res) {
  const { userId } = req.params;
  res.send(`Delete user by Id route: ${userId}`);
}

module.exports = {
  getUsers,
  postUsers,
  getUserById,
  putUserById,
  deleteUserById,
};
