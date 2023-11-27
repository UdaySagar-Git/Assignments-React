import { useState, useEffect } from "react";

const Users = () => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        try {

            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((data) => {
                    setUsersData(data);
                    data.map((element) => (element.clicked = 0));
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const [addCount, setAddCount] = useState(0);

    return (
        <div className="bg-slate-400/20 h-screen">
            <h1 className="text-center text-3xl p-4">count : {addCount}</h1>
            <div className="grid grid-cols-4 gap-4 w-full p-5">

                {usersData.map((user) => {
                    return (
                        <div
                            key={user.id}
                            className="bg-slate-400/30  shadow-lg p-3 min-w-min rounded-lg flex flex-col gap-10 items-center justify-center"
                        >
                            <h1 className="text-xl">{user.name}</h1>

                            <button
                                onClick={() => {
                                    setAddCount((prev) => prev + 1);
                                    user.clicked = !user.clicked;
                                }}
                                className={!user.clicked ? "text-white bg-rose-500 rounded-md px-4 py-1" : "hidden"}
                            >
                                Add
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;