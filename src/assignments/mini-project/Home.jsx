import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Cards from './Components/Cards'
import Details from './Components/Details'
import FavCards from './Components/FavCards'
const Home = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [filterData, setFilterData] = useState('all');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true)
    // fetch('https://dummyjson.com/products/')
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(d => {
        setData(d);
        data.map((item) => (item.isFav = false))
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  const favoriteItem = (id) => {
    data.map((item) => {
      if (item.id === id) {
        item.isFav = !item.isFav;
      }
    })
    setData([...data])
  }

  return (
    <div>
      <Header value={value} setValue={setValue} />
      <Routes>
        <Route path='/' element={<Cards value={value} data={data} setData={setData} favoriteItem={favoriteItem} loading={loading} error={error} filterData={filterData} setFilterData={setFilterData} />} />
        <Route path='/favorite' element={<FavCards data={data} favoriteItem={favoriteItem} />} />
        <Route path='/details/:id' element={<Details setFilterData={setFilterData} favoriteItem={favoriteItem} />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default Home