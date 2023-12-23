import React from 'react'
import { LuSearch } from "react-icons/lu";
import { MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { LuMenu } from "react-icons/lu";

const Header = ({ setValue }) => {
    const navigate = useNavigate();
    const handleFav = () => {
        navigate('/mini-project/favorite')
    }
    return (
        <div className='shadow-md px-2 sticky top-8 bg-white z-10'>
            <div className='flex items-center justify-between p-4'>
                <LuMenu className='text-2xl sm:hidden' />
                <Link to='/mini-project'>
                    <div className='text-2xl font-bold hidden sm:block'>
                        Project
                    </div>
                </Link>
                <div className='p-2 border-2 border-gray-600/60  rounded-lg flex items-center gap-2   hover:border-orange-950'>
                    <input type="text" className='bg-transparent outline-none w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]' onChange={(e) => setValue(e.target.value)} />
                    <LuSearch />
                </div>
                <div className='flex items-center gap-4'>
                    <div className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-[50%] bg-slate-300/30 shadow-md' onClick={handleFav} >
                        <MdOutlineFavorite className='scale-150 ' color=" #DC143C" />
                    </div>
                    <button className='bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hidden sm:block'>
                        Login
                    </button>
                    <button className='bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hidden sm:block'>
                        SignUp
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header