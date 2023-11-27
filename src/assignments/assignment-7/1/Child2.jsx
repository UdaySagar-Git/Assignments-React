
const Table = ({ users }) => {
    return (
        <div>
            <h1 className="text-3xl my-4 text-center font-semibold text-gray-800">List of Users</h1>

            <div className="flex justify-center w-full">

                <div className="max-h-[300px] overflow-y-auto">

                    <table className="border-collapse border w-[800px]">
                        <thead className="sticky top-0 p-2" >
                            <tr className="bg-slate-300 border-collapse border">
                                <th className="border px-4 py-2">Username</th>
                                <th className="border px-4 py-2">Birthday</th>
                                <th className="border px-4 py-2">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.username} className="hover:bg-slate-400/30 hover:cursor-pointer">
                                    <td className="border px-4 py-2">{user.username}</td>
                                    <td className="border px-4 py-2">{user.birthday}</td>
                                    <td className="border px-4 py-2">{user.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Table;