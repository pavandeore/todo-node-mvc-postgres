const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

// get all todos
const getAllTodos = async () => {
    const result = await pool.query('SELECT * FROM todos ORDER BY id');
    return result.rows;
}

// Add a new todo
const addTodo = async(task) => {
    const result = await pool.query('INSERT INTO todos(task) VALUES ($1) RETURNING *', [task])
    return result.rows[0];
}

// Mark a todo as completed
const markAsCompleted = async (id) => {
    const result = await pool.query('UPDATE todos SET completed = TRUE WHERE id = $1 RETURNING *', [id])
    return result.rows[0];
}

// Delete a todo 
const deleteTodo = async (id) => {
    await pool.query('DELETE FROM todos WHERE id = $1', [id]);
}

module.exports = {
    getAllTodos,
    addTodo,
    markAsCompleted,
    deleteTodo
}