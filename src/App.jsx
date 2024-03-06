import { useState } from 'react'

import { PlusCircle } from 'phosphor-react'
import { AppHeader } from './components/AppHeader'
import { ListHeader } from './components/ListHeader'
import { Empty } from './components/Empty'
import { Task } from './components/Task'

import styles from './App.module.css'

export function App() {
  
  const[newTask, setNewTask] = useState('')
  const[tasks, setTasks] = useState([])

  function handleNewTaskChange(event) {
    setNewTask(event.target.value)
  }

  function handleAddTask() {
    if(newTask.trim() !== '') {
      setTasks([...tasks, {id: Date.now(), text: newTask, isChecked: false}])
      setNewTask('')
    }
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  function handleToggleTask(taskId) {
    setTasks(tasks.map(task => (
      task.id === taskId ? {...task, isChecked: !task.isChecked} : task
    )))
  }

  return (
    <>
      <AppHeader />

      <section className={styles.content}>
        
        <div className={styles.taskForm}>
          
          <input 
            type="text"
            name="task"
            placeholder="Adicione uma nova tarefa" 
            onChange={handleNewTaskChange}
            value={newTask}
          />

          <button onClick={handleAddTask}>
            Criar
            <PlusCircle size={20} /> 
          </button>
        
        </div>

        <div className={styles.tasksList}>
          
          <ListHeader tasks={tasks} />
          
          {tasks.length !== 0 ? (
            tasks.map(task => (
              <Task 
                key={task.id} 
                text={task.text} 
                onDeleteTask={() => handleDeleteTask(task.id)} 
                onCompleteTask ={() => handleToggleTask(task.id)}
                isChecked={task.isChecked}
              />
            ))
          ): (
            <Empty />
          ) }

        </div>
        
      </section>
    </>
  )
}