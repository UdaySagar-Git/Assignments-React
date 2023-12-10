import { useContext } from 'react'
import { TodoContext } from './TodoContext'

function TasksCount() {
  const [tasks] = useContext(TodoContext)

  return (
    <div className='p-4 border col-sm-4 border-3 bg-light'>
      <p className='py-1 text-2xl text-center bg-dark'>Tasks Count</p>
      <hr />
      <p className='text-center text-success'>{tasks.length}</p>
    </div>
  )
}

export default TasksCount