const express = require('express');
const router = express.Router();

const { createTodo } =  require('../controller/RestController');

router.post('/createtodo', createTodo);
// router.get('/gettodo',getTodo);
// router.post('/clearcompleted',clearCompleted);
// router.delete('/deletetodo',deleteTodo);
// router.put('/updatetodo',updateTodo)

module.exports = router;

