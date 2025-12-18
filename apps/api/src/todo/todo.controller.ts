import { Body, Controller, Get, Post } from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoSchema } from '@todo/validation'

@Controller('todos')
export class TodoController {
    constructor(private readonly service: TodoService) {}

    @Get()
    findAll() {
        return this.service.findAll()
    }

    @Post()
    create(@Body() body: unknown) {
        const todo = CreateTodoSchema.parse(body)
        return this.service.create(todo)
    }
}