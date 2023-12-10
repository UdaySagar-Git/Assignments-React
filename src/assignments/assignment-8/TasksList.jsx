import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'

function TasksList() {
  let [tasks, setTasks] = useContext(TodoContext)

  const handleCheckboxChange = (id) => {
    setTasks(prevTasks => {
      return prevTasks.map(taskObj => {
        if (taskObj.id === id) {
          return {
            ...taskObj,
            isCompleted: !taskObj.isCompleted
          }
        }
        return taskObj
      })
    })
  }

  return (
    <div className='p-4 border col-sm-4 border-3'>
      <p className='py-1 text-2xl text-center bg-dark '>List of Tasks</p>
      <hr />
      {tasks.map((taskObj) => (
        <div
          key={taskObj.id}
        >
          <input
            type="checkbox"
            checked={taskObj.isCompleted}
            onChange={() => handleCheckboxChange(taskObj.id)}
          />
          <span className="ms-2">{taskObj.task}</span>
        </div>
      ))}
    </div>
  )
}

export default TasksList