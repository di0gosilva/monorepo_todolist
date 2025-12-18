import { Injectable } from '@nestjs/common'
import { randomUUID } from 'crypto'
import { Todo, CreateTodoSchema } from '@todo/validation'

@Injectable()
export class TodoService {
    private todos: Todo[] = []

    findAll(): Todo[] {
        return this.todos
    }

    create(data: CreateTodoSchema): Todo {
        const newTodo: Todo = {
            id: randomUUID(),
            ...data
        }
        
        this.todos.push(newTodo)
        return newTodo
    }
}