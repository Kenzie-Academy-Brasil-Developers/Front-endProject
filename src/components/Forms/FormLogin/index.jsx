/* eslint-disable react/no-unknown-property */
import { useForm } from "react-hook-form"
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import styles from "./style.module.scss"
// import axios from 'axios';
// eslint-disable-next-line react/prop-types
export const  LoginForm = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const [loading, setLoading ] = useState(false);
    
    
    const {userLogin} = useContext(UserContext);

    const submit = (formData) => {
        userLogin(formData, setLoading, reset)
    }
    return(
        <div>
            <form className={styles.containerForm} onSubmit={handleSubmit(submit)}>
                <Input  type="text" placeholder="Digite seu e-mail..." {...register("email")}  error={errors.email} disable={loading}/>
                <Input  type="password" placeholder="Digite sua senha.." {...register("password")}  error={errors.password} disable={loading} />
                <button className="button-link" type="submit"  >{loading ? "Carregando..." : "Entrar"}</button>
            </form>
        </div>
    )
}