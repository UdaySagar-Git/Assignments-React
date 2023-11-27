import React from 'react';

const Child = () => {
    const data = [
        {"id": 1, "name": "John Doe", "profession": "Software Engineer"},
        {"id": 2, "name": "Jane Smith", "profession": "Graphic Designer"},
        {"id": 3, "name": "Mike Johnson", "profession": "Data Scientist"},
        {"id": 4, "name": "Emily Brown", "profession": "Frontend Developer"},
        {"id": 5, "name": "Alex Turner", "profession": "Product Manager"},
        {"id": 6, "name": "Sara Wilson", "profession": "UX/UI Designer"},
        {"id": 7, "name": "Chris Miller", "profession": "Full Stack Developer"},
        {"id": 8, "name": "Lisa Taylor", "profession": "Marketing Specialist"}
    ];

    return (
        <div className="flex flex-wrap w-full gap-4 justify-center p-10">
            {data.map(user => (
                <div key={user.id} className="bg-slate-200 rounded-lg shadow-md p-4 w-1/5 m-5 flex justify-center flex-col items-center ">
                    <img src="src/assignments/assignment-4/1/assests/img.png" alt="Profile" className="w-50 rounded-full mx-auto mb-4 " />
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="text-gray-500">{user.profession}</p>
                    <button className="bg-slate-800 shadow-md text-white px-4 py-2 rounded mt-4">Profile</button>
                </div>
            ))}
        </div>
    );
};

export default Child;
