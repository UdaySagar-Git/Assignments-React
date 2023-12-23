import { useContext } from 'react'
import { TodoContext } from './TodoContext'

function TasksCount() {
  const [tasks] = useContext(TodoContext)

  return (
    <div className='p-4 border col-sm-4 border-3 bg-light'>
      <p className='py-1 text-2xl text-center bg-dark'>Tasks Count</p>
      <hr />
      <div className='mt-4'>

        <div className='flex gap-4 '>
          <p className='w-[60%]'>Total Tasks  </p>
          <span className='px-2'>:</span>
          <p className=' text-success'>{tasks.length}</p>
        </div>
        <div className='flex gap-4 '>
          <p className='w-[60%]'>Completed Tasks  </p>
          <span className='px-2'>:</span>
          <p className=' text-success'>
            {
              tasks.filter((taskObj) => taskObj.isCompleted).length
            }
          </p>
        </div>
        <div className='flex gap-4 '>
          <p className='w-[60%]'>Pending Tasks  </p>
          <span className='px-2'>:</span>
          <p className=' text-success'>
            {
              tasks.filter((taskObj) => !taskObj.isCompleted).length
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default TasksCount