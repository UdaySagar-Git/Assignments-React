import React from 'react'
import AddTask from './AddTask'
import TasksCount from './TasksCount'
import TasksList from './TasksList'
import TodoStore from './TodoStore'

function Parent() {
    return (
        <TodoStore>
            <div className='min-h-screen p-20 bg-red-300'>
                <h1 className='mt-8 mb-4 text-4xl font-bold text-center'>To-Do List</h1>
                <div className='flex justify-center'>
                    <div className='flex-grow p-10 mr-10 bg-white border border-gray-300 rounded-md shadow-lg'>
                        <AddTask/>
                    </div>
                    <div className='flex-grow p-10 mr-10 bg-white border border-gray-300 rounded-md shadow-lg'>
                        <TasksList/>
                    </div>
                    <div className='flex-grow p-10 bg-white border border-gray-300 rounded-md shadow-lg'>
                        <TasksCount/>
                    </div>
                </div>
            </div>
        </TodoStore>
    )
}

export default Parent