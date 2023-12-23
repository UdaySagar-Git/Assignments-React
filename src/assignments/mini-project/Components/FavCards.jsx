import React, { useEffect } from 'react'
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const FavCards = ({ data, favoriteItem }) => {
    const navigate = useNavigate();
    const [fav, setFav] = useState([])

    useEffect(() => {
        setFav(data.filter((item) => item.isFav === true))
    }, [data])

    return (
        <div className="w-full ">
            {
                fav.length === 0 ? <div className='text-2xl font-bold flex justify-center items-center h-[80vh] m-0'>No Data Found</div> :
                    fav.map((item) => {
                        return (
                            <div className="bg-gray-200 rounded-lg p-4 my-10 flex items-center justify-between gap-4 sm:w-[70vw] md:w-[60vw]  mx-10 sm:mx-auto hover:bg-gray-400" key={item.id} >
                                <div className='flex items-center gap-10 mx-10  hover:cursor-pointer ' onClick={() => navigate(`/mini-project/details/${item.id}`)}>
                                    <div>
                                        <img src={item.image} alt="" className='h-[50px] w-[50px] object-contain' />
                                    </div>
                                    <div className='text-xl font-bold'>
                                        {item.title}
                                    </div>

                                </div>
                                <div className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-[50%] bg-slate-300/30 shadow-md ' onClick={() => favoriteItem(item.id)} >
                                    {!item.isFav ?
                                        <MdFavoriteBorder className='scale-150' />
                                        :
                                        <MdOutlineFavorite className='scale-150' color=" #DC143C" />}
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default FavCards