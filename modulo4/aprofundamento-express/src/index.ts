import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/ping", (req, res) => {
  res.send("Pong!")
})

export type ToDo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

export const todos: ToDo[] = [
  {
    userId: 1,
    id: 11,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 2,
    id: 22,
    title: "quis ut nam facilis et officia qui",
    completed: true
  },
  {
    userId: 3,
    id: 33,
    title: "fugiat veniam minus",
    completed: false
  },
]

// Exercício 4
app.get("/todos/completed/:isCompleted", (req, res) => {
  let isCompleted: any = req.params.isCompleted

  if (isCompleted === "true") {
    isCompleted = true
  } else if (isCompleted === "false") {
    isCompleted = false
  } else {
    res.send("Path param  deve ser 'true' ou 'false'")
  }

  const result = []

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === isCompleted) {
      result.push(todos[i])
    }
  }

  res.send(result)
})

// Exercício 5
app.post("/todos", (req, res) => {
  const userId = req.body.userId
  const title = req.body.title

  const newTodo: ToDo = {
    userId,
    id: Date.now(),
    title,
    completed: false
  }

  todos.push(newTodo)

  res.send(todos)
})

// Exercício 6
app.put("/todos/:id/completed", (req, res) => {

  const id = Number(req.params.id)

  for (let todo of todos) {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
  }

  res.send(todos)
})

// Exercício 7
app.delete("/todos/:id", (req, res) => {

  const id = Number(req.params.id)

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1)
    }
  }

  res.send(todos)
})

app.get("/users/:userId/todos", (req, res) => {
  const userId = Number(req.params.userId)

  const result = []

  for (let todo of todos) {
    if (todo.userId === userId) {
      result.push(todo)
    }
  }

  res.send(result)
})