import styles from "./Empty.module.css"
import Clipboard from "/clipboard.png"

export function Empty() {
    return(
        <div className={styles.emptyContent} >
            <img src={Clipboard} alt="prancheta" />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}