import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Details = () => {
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
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <DetailsView data={data} />
      )}
    </div>
  );
};

export default Details;

export const DetailsView = ({ data }) => {
  return (
    <div >
      <Link to='/mini-project'>
        <button className='bg-gray-950 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg relative -top-10 left-0'>
          Back
        </button>
      </Link>
      <div className=" mx-auto w-[80vw] h-[70vh] bg-white shadow-lg rounded-lg ">


        <div className="flex w-full h-full">
          <div className="w-[50%] ">
            <img src={data.image} alt="" className="p-20 h-[100%] mx-auto" />
          </div>
          <div className="w-[50%] p-8">
            <div className="text-red-800 border-2 border-dotted inline-block px-4 py-3 hover:bg-slate-100 cursor-pointer rounded-full text-2xl font-bold mb-4">{data.category}</div>
            <div className="text-4xl font-bold mb-4">{data.title}</div>
            <div className="text-3xl font-bold mb-4">$ {data.price}</div>
            <div className="text-lg font-bold mb-4">{data.description}</div>
          </div>
        </div>
      </div>

    </div>
  );
};
