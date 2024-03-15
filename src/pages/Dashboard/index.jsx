import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { ContactList } from "../../components/ContactList"
import { FaUserCircle } from "react-icons/fa";
import styles from "./style.module.scss"
import iconOcen from "../../assets/iconOcen.png"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
export const Dashboard = () => {
    const {logout, user, deleteUser} =  useContext(UserContext)
    const navigate = useNavigate()
    const handleDeleteUser = async () => {
        if (window.confirm("Tem certeza que deseja excluir sua conta?")) {
            try {
                await deleteUser(user.id);
                navigate("/")
            } catch (error) {
                toast.warning("Algo deu errado!");
            }
        }
    };
    return(
        <main>
            <div className={styles.header}>
                <div className={styles.title}>
                            <div className={styles.divH1Icon}>
                                <h1 className={styles.h1}>Pro</h1>
                                <img className={styles.icon} src={iconOcen} alt="" />
                            </div>
                            <div>
                                <h1 className={styles.h1}>Connections</h1>
                            </div>
                </div>
                <div className={styles.divHeader}>
                    <div>

                    </div>
                    <h2 className={styles.nameUser}>Olá, {user?.name}! <FaUserCircle className={styles.iconUser} /> </h2>
                    <button className=" button-link" onClick={() => {logout()}}>Sair</button>
                    <button className=" button-link" onClick={handleDeleteUser}> Excluir Conta</button>
                </div>
            </div>
            <ContactList />
        </main>
    )
}