import { z } from "zod";
export declare const TodoSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    completed: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    completed: boolean;
}, {
    id: string;
    title: string;
    completed?: boolean | undefined;
}>;
export type Todo = z.infer<typeof TodoSchema>;
