import styles from './AppHeader.module.css'

export function AppHeader() {
    return (
        <header className={styles.header}>
            <img src="/logo.svg" alt="logo da aplicação" />
        </header>
    )
}