import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import {zodResolver} from "@hookform/resolvers/zod"
import { registerSchema } from "./registerSchema";


export const  RegisterForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(registerSchema)
    });

    const submit = (formData) => {
        console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Nome Completo" type="text" placeholder="Matheus Valentim" {...register("name")}  required error={errors.name} />
            <Input label="E-mail" type="text" placeholder="MatheusValentim@example.com" {...register("email")} required error={errors.email}/>
            <Input label="Senha" type="password" placeholder="******" {...register("password")} required error={errors.password} />
            <Input label="Telefone" type="text" placeholder="00 12341234" {...register("telephone")} required error={errors.telephone} />
            <Link to="/">Voltar para a página de login</Link>
            <button>Cadastrar</button> 
        </form>
    )
}