import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "O Nome é obrigatório."),
    email: z.string().min(1, "O E-mail é obrigatório.").email("Forneça um E-mail válido."),
    password: z.string()
        .min(8, "São necessários pelo menos 8 caracteres.")
        .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
        .regex(/[0-9]+/, "É necessário conter pelo menos um número.")
        .regex(/[@#$%¨&*!]+/, "É necessário conter pelo menos um caractere especial: @#$%¨&*!"),
    telephone: z.string().min(1, "Telefone é obrigatório.")
});
