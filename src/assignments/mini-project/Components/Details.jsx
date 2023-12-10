import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { MdFavoriteBorder } from 'react-icons/md';
import { MdOutlineFavorite } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Details = ({ setFilterData, favoriteItem }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {error && <div className='text-2xl font-bold'>Error: {error.message}</div>}

      {loading ? (
        <div className='flex justify-center items-center'>
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
      ) : (
        <DetailsView data={data} setFilterData={setFilterData} favoriteItem={favoriteItem} />
      )}
    </div>
  );
};

export default Details;

export const DetailsView = ({ data, setFilterData, favoriteItem }) => {
  const navigate = useNavigate();
  return (
    <div >
      <button
        className='bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg relative -top-10 left-0'
        onClick={() => navigate('/mini-project')}
      >
        Back
      </button>
      <div className=" mx-auto w-[80vw] h-[70vh] bg-white shadow-lg rounded-lg ">


        <div className="flex w-full h-full">
          <div className="w-[50%] relative">
            <img src={data.image} alt="" className="p-20 h-[100%] mx-auto " />
            {/* <div className='w-10 h-10 flex items-center justify-center cursor-pointer rounded-[50%] bg-slate-300/30 shadow-md absolute right-10 top-10' onClick={() => {favoriteItem(data.id);console.log(data)}} >
              {!data.isFav ?
                <MdFavoriteBorder className='scale-150' />
                :
                <MdOutlineFavorite className='scale-150' color=" #DC143C" />}
            </div> */}
          </div>
          <div className="w-[50%] p-8 m-4 flex flex-col gap-10">
            <div>
              <div className="text-red-800 border-2 border-dotted inline-block px-4 py-3 hover:bg-slate-100 cursor-pointer rounded-full text-2xl font-bold " onClick={
                () => {
                  navigate('/mini-project');
                  setFilterData(data.category);
                }
              }>{data.category}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-4 p-4">{data.title}</div>
              <div className="text-3xl font-bold mb-4 pb-2 text-red-700 bg-orange-100 inline-block px-4 py-2 rounded-lg">$ {data.price}</div>
              <div className="text-xl  h-[100px] overflow-auto mb-4">{data.description}</div>
            </div>
            <div className="text-gray-500 text-md mb-4">Rating: {data.rating.rate} ({data.rating.count} reviews)</div>
          </div>
        </div>
      </div>

    </div>
  );
};

