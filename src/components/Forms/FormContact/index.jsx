import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { useContext } from "react";
import { ContactContext } from "../../../providers/ContactContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "./contactSchema";
import styles from "./style.module.scss"
export const CreateContactForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(contactSchema)
    });
    const {CreateContact} = useContext(ContactContext);
    const submit = (formData) =>{
        CreateContact(formData)
    }
    return(
        <div className={styles.divForm}>
            <h1  className="header-title">Contato</h1>
            <form className={styles.forms} onSubmit={handleSubmit(submit)}>
                <Input type="text" placeholder="Nome do contato" {...register("name")} error={errors.name}  />
                <Input type="text" placeholder="Email do contato" {...register("email")} error={errors.email} />
                <Input type="text" placeholder="Telefone do contato" {...register("telephone")} error={errors.telephone} />
                <button className="button-link" type="submit">Salvar</button>
            </form>
        </div>
    )
}