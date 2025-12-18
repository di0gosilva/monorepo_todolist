'use client'

import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import type { Todo, CreateTodo } from '@todo/validation'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')

  async function loadTodos() {
    const res = await api.get<Todo[]>('/todos')
    setTodos(res.data)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const data: CreateTodo = { title }

    const res = await api.post<Todo>('/todos', data)
    setTodos((prev) => [...prev, res.data])
    setTitle('')
  }

  useEffect(() => {
    loadTodos()
  }, [])

  return (
    <main style={{ padding: 24 }}>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '✅' : ''}
          </li>
        ))}
      </ul>
    </main>
  )
}
