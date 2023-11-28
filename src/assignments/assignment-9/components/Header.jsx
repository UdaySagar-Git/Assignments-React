import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-[8vh] shadow-md border-b  ">
            <div className="container mx-auto flex justify-between items-center h-full">
                <h1 className=" text-2xl font-bold">Header</h1>
                <div className="flex gap-10 h-full items-center ">
                    <Link to="/"><button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Home</button></Link>
                    <Link to="/signup"><button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Sign Up</button></Link>
                    <Link to="/signin"><button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Sign In</button></Link>
                    <Link to="/technologies/react"><button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Technologies</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;