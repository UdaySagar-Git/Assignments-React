import UserList from "./Child";

const Parent = () => {
    return ( 
        <div>
            <NavBar />
            <UserList />
            <Footer />
        </div>
     );
}
 
export default Parent;

const NavBar = () => {
    const imgpath = "https://raw.githubusercontent.com/UdaySagar-Git/Assignments-React/main/src/assignments/assignment-5/assests/logo.jpg";
    return ( 
        <div className="h-[56px] border-b shadow-md flex justify-between sticky top-0 bg-white">
            <img src={imgpath} alt="LOGO" className="h-full" />
            <div className="h-full mr-16">
                <ul className="flex h-full items-center gap-20 ">
                    <li className="cursor-pointer bg-slate-700 text-white px-4 py-1 rounded-md">Home</li>
                    <li className="cursor-pointer bg-slate-700 text-white px-4 py-1 rounded-md">Signup</li>
                    <li className="cursor-pointer bg-slate-700 text-white px-4 py-1 rounded-md">Login</li>
                </ul>
            </div>
        </div>
     );
}


const Footer = () => {
    return (
        <div className="bg-gray-200 py-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Column 1</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#">Link 1</a>
                            </li>
                            <li>
                                <a href="#">Link 2</a>
                            </li>
                            <li>
                                <a href="#">Link 3</a>
                            </li>
                            <li>
                                <a href="#">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Column 2</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#">Link 5</a>
                            </li>
                            <li>
                                <a href="#">Link 6</a>
                            </li>
                            <li>
                                <a href="#">Link 7</a>
                            </li>
                            <li>
                                <a href="#">Link 8</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}