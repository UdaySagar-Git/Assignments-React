import React from 'react';

const Child = ({ setCount }) => {
    return (
        <div className=' flex items-center justify-center gap-20'>
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCount(prev => prev + 1)}
            >
                Increment
            </button>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setCount(prev => prev - 1)}
            >
                Decrement
            </button>
        </div>
    );
};

export default Child;