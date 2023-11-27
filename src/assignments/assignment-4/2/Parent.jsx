import Child from "./Child";
import { useState } from 'react';

const Parent = () => {

    const [count, setCount] = useState(0)
    return (
        <div className="h-screen bg-gray-200 p-4 ">
            <div className="h-[300px]  flex items-center justify-center">
                <span className="text-3xl font-bold ">Counter:   {count}</span>
            </div>
            <Child setCount={setCount} />
        </div>
    );
}

export default Parent;