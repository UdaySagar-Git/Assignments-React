
import { Link } from "react-router-dom";

const Header = () => {
   
    const path="/assignment-9"

    return (
        <div className="h-[8vh] shadow-md border-b  ">
            <div className="container mx-auto flex justify-between items-center h-full">
                <h1 className=" text-2xl font-bold">Header</h1>
                <div className="flex gap-10 h-full items-center ">
                    <Link to={`${path}`}><button className="bg-gray-800 text-white px-4 py-2 rounded-md">Home</button></Link>
                    <Link to={`${path}/signup`}><button className="bg-gray-800 text-white px-4 py-2 rounded-md">Signup</button></Link>
                    <Link to={`${path}/signin`}><button className="bg-gray-800 text-white px-4 py-2 rounded-md">Signin</button></Link>
                    <Link to={`${path}/technologies/react`}><button className="bg-gray-800 text-white px-4 py-2 rounded-md">Technologies</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;