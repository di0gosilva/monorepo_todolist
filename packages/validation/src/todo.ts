import { z } from "zod"

export const TodoSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  completed: z.boolean().default(false)
})

export const CreateTodoSchema = TodoSchema.omit({ id: true })

export type Todo = z.infer<typeof TodoSchema>
export type CreateTodoSchema = z.infer<typeof CreateTodoSchema>