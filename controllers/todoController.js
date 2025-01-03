const Todo = require('../models/todoModel');

// Get all todos 
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.getAllTodos();
        res.render('index', {todos})
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}

// add a new todo
const addTodo = async (req, res) => {
    try {
        const { task } = req.body;
        await Todo.addTodo(task);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}

// mark as completed
const markCompleted = async (req, res) => {
    try {
       const {id} = req.params;
       await Todo.markAsCompleted(id);
       res.redirect('/');
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}

// delete todo
const deleteTodo = async (req, res) => {
    try {
       const {id} = req.params;
       await Todo.deleteTodo(id);
       res.redirect('/');
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}

module.exports = {
    getTodos,
    addTodo,
    markCompleted,
    deleteTodo
}
