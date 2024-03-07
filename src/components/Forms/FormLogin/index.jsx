
import { useForm } from "react-hook-form"
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";

export const  LoginForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const submit = (formData) => {
        console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input label="E-mail" type="text" placeholder="Digite seu E-mail..." {...register("email")} required error={errors.email}/>
            <Input label="Senha" type="password" placeholder="Digite sua senha.." {...register("password")} required error={errors.password} />
            <button>Entrar</button>
        </form>
    )
}