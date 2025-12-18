import { api } from './api'
import type { Todo, CreateTodoSchema } from '@todo/validation'

export async function getTodos(): Promise<Todo[]> {
  const { data } = await api.get('/todos')
  return data
}

export async function CreateTodo(
  payload: CreateTodoSchema
): Promise<Todo> {
  const { data } = await api.post('/todos', payload)
  return data
}
