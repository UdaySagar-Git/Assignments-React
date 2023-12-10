import React from 'react'
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const FavCards = ({ data, favoriteItem }) => {
    const navigate = useNavigate();

    return (
        <div className="w-full ">
            {
                data.map((item) => {
                    if (item.isFav)
                        return (
                            <div className="bg-gray-200 rounded-lg p-4 my-10 flex items-center justify-between gap-4 sm:w-[70vw] md:w-[60vw]  mx-10 sm:mx-auto hover:cursor-pointer hover:bg-gray-400" key={item.id} onClick={() => navigate(``)}>
                                <div className='flex items-center gap-10 mx-10'>
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