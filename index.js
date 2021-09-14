const express = require('express');
const cors = require('cors');
const pool = require('./db.js');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(express.static('./client/build'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

// console.log(__dirname);
// console.log( app.use(express.static(path.join(__dirname, 'client/build'))));

// Get all todos

app.get('/todos', async (req, res) => {
    
  try {
    const allTodos = await pool.query('SELECT * FROM todo;');
    res.json(allTodos.rows);
  } catch (err) {
      console.error(err.message);
  }
})

// Get a todo

app.get('/todos/:id', async (req, res) => {
    const { id } = req.params;

  try {
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1;', [id]);
    res.json(todo.rows[0]);
  } catch (err) {
      console.error(err.message);
  }
})

// Create a todo

app.post('/todos', async (req, res) => {
  const { description } = req.body;

  try {
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *;', [description]);
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a todo 

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2;', [description, id]);
        res.json(updateTodo);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/todos/:id', async (req, res) => {
   const { id } = req.params;

    try {
        const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1;', [id]);
        res.json(deleteTodo);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));