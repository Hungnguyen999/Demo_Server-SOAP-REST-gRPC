const todos = [];
/**
 * Insert todo to db
 * @todo {id,title,completed}
 */

exports.insert = todo =>{
    const tobeTodo = { ...todo,completed: false };
    todos.push(tobeTodo);
    return tobeTodo;
};
