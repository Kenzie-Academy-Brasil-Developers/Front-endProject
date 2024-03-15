import { useContext } from "react"
import { ContactContext } from "../../../providers/ContactContext"
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import styles from "./style.module.scss"
export const EditContact = () => {
    const {editingContact, editContact} = useContext(ContactContext);
    const { register, handleSubmit } = useForm({
        values: {
            name: editingContact.name,
            email: editingContact.email,
            telephone: editingContact.telephone
        }
    });
    const submit = (formData) => {
        editContact(formData)
    }

    return(
        <div  className={styles.divForm}>
            <form className={styles.forms} onSubmit={handleSubmit(submit)}>
                <Input type="text" placeholder="Nome do contato" {...register("name")}   />
                <Input type="text" placeholder="Email do contato" {...register("email")} />
                <Input type="text" placeholder="Telefone do contato" {...register("telephone")} />
                <button className="button-link" type="submit">Salvar</button>
            </form>
        </div>
    )
}