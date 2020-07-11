const todoModel = require('../models/Rest.js');

exports.createTodo = (req,res) =>{
    const todo = { id: 12, title: "nguyễn duy hưng"};  //Nhận request từ front end
    console.log("todo nè", todo)
    const inserted = todoModel.insert(todo);  // gọi function thông qua models
    res.json(inserted);
};  