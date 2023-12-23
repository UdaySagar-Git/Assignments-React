import React from 'react'
import AddTask from './AddTask'
import TasksCount from './TasksCount'
import TasksList from './TasksList'
import TodoStore from './TodoStore'

function Parent() {
    return (
        <TodoStore>
            <div className=' bg-rose-500 min-h-screen'>
                <div className='w-full  lg:w-[70%] mx-auto '>
                    <h1 className='mt-8 mb-4 text-4xl font-bold text-center text-white '>To-Do List</h1>
                    <div className='flex justify-center flex-col w-full mx-auto gap-4 px-10 lg:px-0'>
                        <div className='flex gap-4 flex-col md:flex-row'>
                            <div className='md:w-[60%] w-full  p-10  bg-white border border-gray-300   rounded-2xl shadow-lg'>
                                <AddTask />
                            </div>
                            <div className='md:w-[40%] w-full p-10 bg-white border border-gray-300   rounded-2xl shadow-lg'>
                                <TasksCount />
                            </div>
                        </div>
                        <div className='p-10  bg-white border border-gray-300   rounded-2xl shadow-lg '>
                            <TasksList />
                        </div>
                    </div>
                </div>
            </div>
        </TodoStore>
    )
}

export default Parent