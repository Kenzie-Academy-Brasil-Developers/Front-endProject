/* eslint-disable react/prop-types */
import { useContext } from "react"
import { MdDelete, MdEdit } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../../providers/ContactContext";
import { LuUsers2 } from "react-icons/lu";
import styles from "./style.module.scss"
// eslint-disable-next-line react/prop-types
export const ContactCard = ({contact}) => {
    const navigate = useNavigate();
    const { deleteContact, setEditingContact} = useContext(ContactContext);

    return(
        <li className={styles.card}>
            <div className={styles.divContainer}>
                <p><LuUsers2 className={styles.icon}/></p>
                <div className={styles.divInfo}>
                    <p className={styles.p}>{contact.name}</p>
                    <p className={styles.pInfo}>{contact.email}</p>
                    <p className={styles.pInfo}>{contact.telephone}</p>
                </div>
            </div>
            <div className="contact-actions">
                <button onClick={() => {setEditingContact(contact); navigate("/edit")}} title="edit"><MdEdit className={styles.iconEditDelete}/></button>
                <button onClick={() => {deleteContact(contact.id)}} title="delete"><MdDelete className={styles.iconEditDelete}/></button>
            </div>
        </li>
    )
}