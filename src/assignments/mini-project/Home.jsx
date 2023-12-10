import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cards from './Components/Cards'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import FavCards from './Components/FavCards'
import { useEffect } from 'react'

const Home = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

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
    <Routes>
      <Route path='/' element={<div>
        <Header value={value} setValue={setValue} />
        <Cards value={value} data={data} setData={setData} favoriteItem={favoriteItem} loading={loading} error={error} />
        <Footer />
      </div>} />
      <Route path='/favorite' element={<div>
        <Header value={value} setValue={setValue} />
        <FavCards data={data} favoriteItem={favoriteItem} />
        <Footer />
      </div>} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  )
}

export default Home