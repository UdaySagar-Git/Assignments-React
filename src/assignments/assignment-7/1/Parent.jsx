import AddUser from "./Child";
import Table from "./Child2";
import { useEffect, useState } from 'react';

const Parent = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        console.log(users)
    }, [users])
    return (
        <div className="">
            <AddUser users={users} setUser={setUser} />
            <Table users={users} />
        </div>
    );
}

export default Parent;
