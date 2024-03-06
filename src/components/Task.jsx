import { Trash, Check } from 'phosphor-react'
import styles from './Task.module.css'

export function Task({ text, onDeleteTask, onCompleteTask, isChecked }) {
    return(
        <div className={styles.item} >

            <div className={styles.itemInfo}>

                <input type="checkbox" />
                <span className={`${styles.checkbox} ${isChecked ? styles.checked  : ''}`} onClick={onCompleteTask}> 
                    {isChecked && <Check size={12} />}
                </span>

                <p className={`${styles.paragraph} ${isChecked ? styles.paragraphChecked : ''}`}>
                    {text}
                </p>

            </div>
            
            <button onClick={onDeleteTask} >
                <Trash size={20} />
            </button>
           

        </div>
    )
}