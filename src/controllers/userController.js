const userService = require('../services/userService');

async function store(req, res) {
  const { name, email, password } = req.body;
  const user = await userService.store(name, email, password);
  if (user.error) return res.status(user.code).json({ message: user.error });
  res.status(201).json(user);
}

module.exports = {
  store,
}