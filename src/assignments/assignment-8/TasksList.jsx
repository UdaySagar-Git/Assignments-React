import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoContext'

function TasksList() {
  let [tasks, setTasks] = useContext(TodoContext)
  const [filter, setFilter] = useState('all')

  const handleCheckboxChange = (id) => {
    const temp = [...tasks]
    const index = temp.findIndex((taskObj) => taskObj.id === id)
    temp[index].isCompleted = !temp[index].isCompleted
    setTasks(temp)
  }

  const handleDeleteAll = () => {
    setTasks([])
  }
  const handleDelete = (id) => {
    const temp = [...tasks]
    const index = temp.findIndex((taskObj) => taskObj.id === id)
    temp.splice(index, 1)
    setTasks(temp)
  }
  const handleEdit = (id) => {
    const temp = [...tasks]
    const index = temp.findIndex((taskObj) => taskObj.id === id)
    const newTask = prompt('Enter new task', temp[index].task)
    temp[index].task = newTask
    setTasks(temp)
  }

  const handleFilterChange = (filterType) => {
    setFilter(filterType)
  }

  const filteredTasks = tasks.filter((taskObj) => {
    if (filter === 'completed') {
      return taskObj.isCompleted
    } else if (filter === 'pending') {
      return !taskObj.isCompleted
    } else {
      return true
    }
  })

  return (
    <div>
      <div className='flex w-full justify-between'>
        <div className='w-[80%] flex justify-around'>
          <button
            onClick={() => handleFilterChange('all')}
            className={`${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} px-4 py-2 my-3 rounded-md`}
          >
            All Tasks
          </button>
          <button
            onClick={() => handleFilterChange('completed')}
            className={`${filter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
              } my-3 px-4 py-2 rounded-md`}
          >
            Completed
          </button>
          <button
            onClick={() => handleFilterChange('pending')}
            className={`${filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              } my-3 px-4 py-2 rounded-md`}
          >
            Pending
          </button>
        </div>
        <div>
          <button
            onClick={handleDeleteAll}
            className='bg-red-500 text-white px-4 py-2  rounded-md my-3'
          >
            Delete All
          </button>
        </div>
      </div>
      <div className='border border-3 w-full'>
        <p className='py-1 text-2xl text-center bg-dark '>List of Tasks</p>
        <hr />
        <div className='h-[250px] overflow-y-scroll'>
          {filteredTasks.length === 0 && (
            <p className='text-center font-bold text-danger my-4'>No Tasks Found</p>
          )}
          {filteredTasks.map((taskObj) => (
            <div key={taskObj.id} className='flex justify-between items-center p-2 border-b-2'>
              <div>
                <input
                  className="mr-3"
                  type='checkbox'
                  checked={taskObj.isCompleted}
                  onChange={() => handleCheckboxChange(taskObj.id)}
                />
                <span className={`${taskObj.isCompleted ? 'line-through' : ''}`}>{taskObj.task}</span>
              </div>
              <div className='flex gap-4'>
                <button onClick={() => handleEdit(taskObj.id)}>Edit</button>
                <button onClick={() => handleDelete(taskObj.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TasksList