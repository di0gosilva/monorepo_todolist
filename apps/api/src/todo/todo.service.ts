import { randomUUID } from 'crypto';
import { Todo, CreateTodoSchema } from '@todo/validation';
import { TodoRepository } from './todo.repository';

export class TodoService {
  constructor(private readonly repo: TodoRepository) {}

  findAll(): Todo[] {
    return this.repo.findAll();
  }

  create(data: CreateTodoSchema): Todo {
    const todo: Todo = {
      id: randomUUID(),
      ...data,
    };

    return this.repo.create(todo);
  }
}
