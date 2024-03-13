import loadingIcon from "../../assets/loading.svg";
import styles from "./style.module.scss";
export const Loading = () => {
    return(
        <div className={styles.loadingBox}>
            <img src={loadingIcon} alt="Loading" />
        </div>
    )
}