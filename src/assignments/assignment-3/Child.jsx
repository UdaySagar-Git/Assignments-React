import React from 'react';

const Child = ({ title, price, image, category }) => {
  return (
    <div className='bg-white shadow-xl w-full sm:w-1/3 p-3 md:w-1/4 flex justify-center flex-col items-center rounded-2xl border-2'>
      <img src={image} alt={title} className='w-[150px] h-[190px] mb-4 rounded-md shadow-md' />
      <p className='text-[13px]  m-4'>{title}</p>
      <h2 className='text-gray-700 mb-2'>${price}</h2>
      <div className='bg-rose-500 text-white text-sm text-center rounded-lg mb-2 w-28 p-1 m-auto'>{category}</div>
    </div>
  );
};

export default Child;
