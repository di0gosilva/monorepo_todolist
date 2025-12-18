"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = void 0;
const zod_1 = require("zod");
exports.TodoSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    title: zod_1.z.string().min(1),
    completed: zod_1.z.boolean().default(false)
});
//# sourceMappingURL=todo.js.map