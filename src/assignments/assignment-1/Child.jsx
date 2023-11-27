import React from 'react';

const Child = () => {
    const user = {
        name: 'uday',
        branch: 'cse',
        city: 'hyderabad',
    };

    const branches = ['cse', 'ece', 'eee', 'civil', 'mech'];

    return (
        <div className="container mx-auto ">
            <h1 className="text-2xl font-bold mb-4">Dynamic Content</h1>
            <h2 className="text-lg mb-2">Name: {user.name}</h2>
            <h2 className="text-lg mb-2">Branch: {user.branch}</h2>
            <h2 className="text-lg mb-2">City: {user.city}</h2>

            <h1 className="text-2xl font-bold mt-8 mb-4">Array iteration</h1>
            <ul>
                {branches.map((branch, index) => (
                    <li key={index} className="text-lg mb-2">
                        {branch}
                    </li>
                ))}
            </ul>

            <h1 className="text-2xl font-bold mt-8 mb-4">Image from file</h1>
            <img src="src/assignments/assignment-1/assets/img.jpg" alt="" className="h-72 w-48 mb-4 "/>

            <h1 className="text-2xl font-bold mt-8 mb-4">Image from web</h1>
            <img src="https://images.pexels.com/photos/3015288/pexels-photo-3015288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-72 w-48 mb-4 "/>
        </div>
    );
};

export default Child;