import styles from "./style.module.scss"
export const ErrorPage = () => {
    const handleGoHome = () => {
        window.location.href = '/';
     };
    
    return (
        <div className={styles.container}>
            <div className={styles.error}>
            <h1 className={styles.errorTitle}>Oops!</h1>
            <p className={styles.errorMessage}>Algo deu errado.</p>
            <button className={styles.goBackButton} onClick={handleGoHome}>Voltar à página inicial</button>
            </div>
        </div>
    );
}
