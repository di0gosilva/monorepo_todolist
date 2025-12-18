'use client'

import { useEffect, useState } from 'react'
import { getTodos, CreateTodo } from '@todo/api-client'
import type { Todo } from '@todo/validation'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    getTodos().then(setTodos)
  }, [])

  async function handleAdd() {
    if (!title) return

    const newTodo = await CreateTodo({ title, completed })
    setTodos((prev) => [...prev, newTodo])
    setTitle('')
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Todo List</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa"
      />

      <button onClick={handleAdd}>Adicionar</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </main>
  )
}
