import { useState } from "react"
import styles from "./ListHeader.module.css"

export function ListHeader({ tasks }) {
    
    const createdTasks = tasks.length
    
    const completedTasks = tasks.filter(task => task.isChecked).length
    
    return(
        <header className={styles.listHeader}>
            <aside>
                <p>Tarefas Criadas</p>
                <span>{createdTasks}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>{completedTasks} de {createdTasks}</span>
            </aside>
        </header>
    )
}