import AddUser from "./Child";
import UserList from "./Child2";
import UserCount from "./Child3";
import { useEffect, useState } from 'react';

const Parent = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        console.log(users)
    }, [users])
    return (
        <div >
            <AddUser users={users} setUser={setUser} />
            <UserCount users={users} />
            <UserList users={users} setUser={setUser}/>
        </div>
    );
}

export default Parent;
