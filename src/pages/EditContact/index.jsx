import { useContext } from "react"
import { ContactContext } from "../../providers/ContactContext"
import { Navigate, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { EditContact } from "../../components/Forms/FormEdit";
export const EditContactPage = () => {
    const { editingContact, setEditingContact} = useContext(ContactContext);
    const navigate = useNavigate()

    return editingContact ? (
            <div>
                <button className="button-link" onClick={() => {setEditingContact(null); navigate("/Dashboard")}}> <MdArrowBack/> voltar</button>
                <EditContact />
            </div>
    ) : (<Navigate to="/Dashboard" />)
}