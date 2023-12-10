import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineFavorite } from "react-icons/md";
import { useState } from 'react';
import Filters from './Filters';

const Cards = ({ value, data, setData, favoriteItem, loading, error, filterData, setFilterData }) => {


    return (
        <div className=''>
            <Filters data={data} setData={setData} setFilterData={setFilterData} filterData={filterData} />
            {error && <div className='text-2xl font-bold flex justify-center items-center h-[80vh] m-0'>Error: {error.message}</div>}

            {loading ? <div className='flex justify-center items-center h-[80vh] m-0'>
                <Oval
                    height={80}
                    width={80}
                    color="#000000"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#000000"
                    strokeWidth={2}
                    strokeWidthSecondary={2}

                />
            </div>
                : <AllCards data={data} value={value} setData={setData} favoriteItem={favoriteItem} filterData={filterData} />}

        </div>
    )
}

export default Cards



const AllCards = ({ data, value, favoriteItem, filterData }) => {
    return (
        <div className='flex flex-wrap justify-center gap-10 p-4 m-10 '>
            {data.filter((filterItem) => filterItem.title.toLowerCase().includes(value) && (filterData === 'all' || filterItem.category === filterData)).length === 0 && <div className='text-2xl font-bold flex justify-center items-center h-[80vh] m-0'>No Data Found</div>}
            {data.filter((filterItem) => filterItem.title.toLowerCase().includes(value) && (filterData === 'all' || filterItem.category === filterData)).map((item, index) => (

                <div className='border-2 border-gray-600 rounded-lg  p-4 flex flex-col items-center gap-4 w-full m-4 sm:m-0 sm:w-[300px]  relative ' key={index}>
                    <div className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-[50%] bg-slate-300/30 shadow-md absolute right-3 top-3' onClick={() => favoriteItem(item.id)} >
                        {!item.isFav ?
                            <MdFavoriteBorder className='scale-150' />
                            :
                            <MdOutlineFavorite className='scale-150' color=" #DC143C" />}
                    </div>
                    <img src={item.image} alt="" className='rounded-lg h-[200px]' />
                    <div className='text-xl font-bold  text-center h-[60px] overflow-auto'>
                        {item.title}
                    </div>
                    {/* <div className='text-lg font-bold'>
                       $ {item.price}
                    </div> */}
                    <Link to={`/mini-project/details/${item.id}`} className='bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg' >
                        <button > Details</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}
