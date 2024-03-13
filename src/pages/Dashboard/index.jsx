import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { ContactList } from "../../components/ContactList"
import { MdDeleteOutline } from "react-icons/md"
import styles from "./style.module.scss"
export const Dashboard = () => {
    const {logout, user, deleteUser} =  useContext(UserContext)
    const handleDeleteUser = () => {
        if (window.confirm("Tem certeza que deseja excluir sua conta?")) {
            deleteUser(user.id); 
        }
    };

    return(
        <main>
            <div className={styles.header}>
                <h2 className={styles.headertitle}>{user?.name}</h2>
                <button className="header-button button-link" onClick={() => {logout()}}>Logout</button>
                <button className="header-button button-link" onClick={handleDeleteUser}><MdDeleteOutline/> Excluir Conta</button>
            </div>
            <ContactList />
        </main>
    )
}