/* eslint-disable react/no-unknown-property */
import { useForm } from "react-hook-form";
import { Link,  } from "react-router-dom";
import { Input } from "../Input";
import {zodResolver} from "@hookform/resolvers/zod"
import { registerSchema } from "./registerSchema";
import { InputPassword } from "../InputPassword";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";


export const  RegisterForm = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: zodResolver(registerSchema)
    });

    const [loading, setLoading ] = useState(false)

    const {userRegister} = useContext(UserContext)

    const submit = (formData) => {
        userRegister(formData, setLoading,reset)
    }
    return(
        <form className="forms" onSubmit={handleSubmit(submit)}>
            <Input label="Nome Completo" type="text" placeholder="Matheus Valentim" {...register("name")}  error={errors.name} disable={loading} />
            <Input label="E-mail" type="text" placeholder="MatheusValentim@example.com" {...register("email")}  error={errors.email} disable={loading}/>
            <InputPassword label="Senha" placeholder="*********"{...register("password")} error={errors.password} disable={loading} />
            <InputPassword label="Confirme sua Senha" placeholder="*********" {...register("confirmPassword")}  error={errors.confirmPassword} disable={loading}/>
            <Input label="Telefone" type="text" placeholder="Contato" {...register("telephone")} error={errors.telephone} disable={loading} />
            <div className="button-container">
                <Link className="button-link" to="/">Voltar para login</Link>
                <button className="button-link" disable={loading}>{loading ? "Cadastrando..." : "Cadastrar"}</button> 
            </div>
        </form>
    )
}