import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoContext'

function AddTask() {
  let [tasks, setTasks] = useContext(TodoContext)
  let [newTask, setNewTask] = useState('')

  function handleFormSubmit(event) {
    event.preventDefault()
    setTasks([...tasks, { task:newTask , id: tasks.length + 1 , isCompleted: false }])
    setNewTask('')
    console.log(tasks)
  }

  return (
    <div className='p-4 border col-sm-4'>
      <p className='py-1 text-2xl text-center bg-dark text-info'>Add Task</p>
      <hr />
      <form onSubmit={handleFormSubmit} className='flex justify-between gap-3'>
        <input
          type='text'
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          className='flex flex-1 p-2 mt-3 border border-gray-300 rounded-md form-control focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent '
          placeholder='Enter new task'
        />
        <button className='px-4 py-2 mt-3 text-white bg-green-500 rounded-md hover:bg-green-600'>Add Task</button>
      </form>
    </div>
  )
}

export default AddTask