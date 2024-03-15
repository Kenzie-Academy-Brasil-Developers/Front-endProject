import { MdArrowBack } from "react-icons/md"
import { Link } from "react-router-dom"
import { CreateContactForm } from "../../components/Forms/FormContact"
import styles from "./style.module.scss"
export const CreateContactPage = () => {
    return(
        <main className={styles.mainContainer}>
            <Link className={styles.buttonlink} to="/Dashboard"><MdArrowBack/> voltar</Link>
            <CreateContactForm />
        </main>
    )
}