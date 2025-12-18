import { Todo } from '@todo/validation';

export class TodoRepository {
  private todos: Todo[] = [];

  findAll() {
    return this.todos;
  }

  create(todo: Todo) {
    this.todos.push(todo);
    return todo;
  }
}
