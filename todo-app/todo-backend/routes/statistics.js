const router = require('express').Router();
const { getAsync } = require('../redis');

router.get('/', async (req, res) => {
  const addedTodos = parseInt(await getAsync('addedTodos')) || 0;
  res.send({ added_todos: addedTodos });
});

module.exports = router;
