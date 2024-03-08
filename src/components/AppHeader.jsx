import styles from './AppHeader.module.css'
import Logo from "/logo.svg"

export function AppHeader() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo da aplicação" />
        </header>
    )
}