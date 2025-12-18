import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { TodoSchema, CreateTodoSchema, type Todo } from '@todo/validation';

@Controller('todos')
export class TodoController {
  private todos: Todo[] = [];

  @Get()
  findAll(): Todo[] {
    return this.todos;
  }

  @Post()
  create(@Body() body: unknown): Todo {
    const data = CreateTodoSchema.parse(body);

    const todo = TodoSchema.parse({
      id: randomUUID(),
      title: data.title,
      completed: false,
    });

    this.todos.push(todo);

    return todo;
  }
}
