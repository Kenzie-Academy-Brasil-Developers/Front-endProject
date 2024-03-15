import { useContext } from "react"
import { ContactContext } from "../../providers/ContactContext"
import { Navigate, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { EditContact } from "../../components/Forms/FormEdit";
import styles from "./style.module.scss"
export const EditContactPage = () => {
    const { editingContact, setEditingContact} = useContext(ContactContext);
    const navigate = useNavigate()

    return editingContact ? (
            <div className={styles.divMain}>
                <button className={styles.buttonlink} onClick={() => {setEditingContact(null); navigate("/Dashboard")}}> <MdArrowBack/> voltar</button>
                <EditContact />
            </div>
    ) : (<Navigate to="/Dashboard" />)
}