function getUsers(req, res) {
  res.send("Get users route");
}

function postUsers(req, res) {
  res.send("Post users route");
}

function getUserById(req, res) {
  const { userId } = req.params;
  res.send(`Get user by Id route: ${userId}`);
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
