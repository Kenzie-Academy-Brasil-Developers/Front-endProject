import { RegisterForm } from "../../components/Forms/FormRegister"
import styles from "./style.module.scss"
export const RegisterPage = () => {
    return(
        <main className="container">
            <div className={styles.divContent}>
                <div>
                </div>
                <div className="formulario, div">
                    <h1 className={styles.title}>Cadastre-se</h1>
                    <RegisterForm />
                </div>
            </div>
        </main>
    )
}