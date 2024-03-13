import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().min(1, "O e-mail é obrigatório.").email("Digite um e-mail válido"),
    telephone: z.string().min(1, "Obrigatório.")
});