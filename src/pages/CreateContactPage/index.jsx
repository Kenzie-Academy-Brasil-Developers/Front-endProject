import { MdArrowBack } from "react-icons/md"
import { Link } from "react-router-dom"
import { CreateContactForm } from "../../components/Forms/FormContact"

export const CreateContactPage = () => {
    return(
        <main>
            <Link className="button-link" to="/Dashboard"><MdArrowBack/> voltar</Link>
            <h1  className="header-title">Contato</h1>
            <CreateContactForm />
        </main>
    )
}