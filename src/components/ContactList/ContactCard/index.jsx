/* eslint-disable react/prop-types */
import { useContext } from "react"
import { MdDelete, MdEdit } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../../providers/ContactContext";

// eslint-disable-next-line react/prop-types
export const ContactCard = ({contact}) => {
    const navigate = useNavigate();
    const { deleteContact, setEditingContact} = useContext(ContactContext);

    return(
        <li className="contact-card">
        <div className="contact-info">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.telephone}</p>
        </div>
        <div className="contact-actions">
            <button onClick={() => {setEditingContact(contact); navigate("/edit")}} title="edit"><MdEdit/></button>
            <button onClick={() => {deleteContact(contact.id)}} title="delete"><MdDelete/></button>
        </div>
    </li>
    )
}