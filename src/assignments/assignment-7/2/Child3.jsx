const UserCount = ({users}) => {
    return ( 
        <div>
            <h1 className="text-3xl my-4 text-center font-semibold text-gray-800">User Count : {users.length}</h1>
        </div>
     );
}
 
export default UserCount;