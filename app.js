const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const todoController = require('./controllers/todoController');
const path = require('path');

dotenv.config();

const app = express();
const port = 3000; 

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.get('/', todoController.getTodos);
app.post('/todos', todoController.addTodo);
app.get('/todos/:id/complete', todoController.markCompleted)
app.get('/todos/:id/delete', todoController.deleteTodo)

app.listen(port, () => {
    console.log('app running')
})