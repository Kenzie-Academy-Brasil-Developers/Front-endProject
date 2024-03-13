import styles from "./style.module.scss"
import iconOcen from "../../assets/iconOcen.png"
// import { FaUserCircle } from "react-icons/fa";
import { LoginForm } from "../../components/Forms/FormLogin";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export const HomePage = () => {
    return(
        <main className={styles.main}>
            <div className={styles.divMain}>
                <div className={styles.divInfo}>
                    <div className={styles.title}>
                        <div className={styles.divH1Icon}>
                            <h1 className={styles.h1}>Pro</h1>
                            <img className={styles.icon} src={iconOcen} alt="" />
                        </div>
                        <div>
                            <h1 className={styles.h1}>Connections</h1>
                        </div>
                    </div>
                    <div>
                        <div className={styles.divP}>
                            <p className={styles.p}>Conecte-se ao ProConnections e otimize sua gestão de conexões profissionais. Mantenha suas redes organizadas e alcance novos patamares de eficiência no mundo dos negócios.</p>
                        </div>
                        <Link to="/register"  className="button-link">Cadastre-se</Link>
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    )
}