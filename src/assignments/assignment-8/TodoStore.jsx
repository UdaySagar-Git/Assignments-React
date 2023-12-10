import { useState } from "react";
import {TodoContext} from './TodoContext'


function TodoStore({children}){

    let [tasks,setTasks] = useState([])
    
    return (
        <TodoContext.Provider value={[tasks,setTasks]} >
            {children}
        </TodoContext.Provider>
    )

}

export default TodoStore


