import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, "O E-mail é obrigatório.").min(5, "Insira um E-mail válido"),
    password: z.string().min(1, "A Senha é obrigatória.").min(8, "Insira uma senha válida")
});