import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContactContext } from "../../providers/ContactContext"
import { ContactCard } from "./ContactCard";
import styles from "./style.module.scss"
import { FaStar } from "react-icons/fa";



export const ContactList = () => {
    const {contactList} = useContext(ContactContext);

    return(
        <div className={styles.divContainer}>
            <div className={styles.divContent}>
                <div className={styles.divInputButton}>
                    <input className={styles.input} placeholder="Em andamento..." />
                    <Link className={styles.buttonlink} to="/contact">Adicionar Contato</Link>
                </div>
                <div className={styles.divContacts}>
                        <h2 className={styles.title}>Lista de Contatos</h2>
                    <ul className={styles.ul}>
                        {contactList.map(contact => (
                            <ContactCard key={contact.id} contact={contact}/>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.Favorites}>
                <div className={styles.loading}>
                    <p className={styles.p}>Em andamento...</p>
                    <div className={styles.favoritestar}><FaStar className={styles.iconStar}/></div>
                </div>

            </div>
        </div>
    )
}