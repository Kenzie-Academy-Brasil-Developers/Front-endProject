import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório."),
    email: z.string().min(1, "O e-mail é obrigatório.").email("Forneça um e-mail válido."),
    password: z.string()
        .min(8, "São necessários pelo menos 8 caracteres.")
        .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
        .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
        .regex(/[0-9]+/, "É necessário conter pelo menos um número.")
        .regex(/[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?~`]+/, "É necessário pelo menos um caractere especial"),
    confirmPassword: z.string().min(1, "Confirmar a senha é obrigatória."),
    telephone: z.string().min(1, "Telefone é obrigatório.")
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
});
