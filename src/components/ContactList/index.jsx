import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContactContext } from "../../providers/ContactContext"
import { ContactCard } from "./ContactCard";

export const ContactList = () => {
    const {contactList} = useContext(ContactContext);

    return(
        <div>
            <div className="divContact">
                <h2 className="header-title">Contatos</h2>
                <Link className="button-link" to="/contact">Adicionar Contato</Link>
            </div>
            <ul>
                {contactList.map(contact => (
                    <ContactCard key={contact.id} contact={contact}/>
                ))}
            </ul>
        </div>
    )
}