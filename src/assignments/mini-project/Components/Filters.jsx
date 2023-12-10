import React from 'react'
import './Filters.css'

const Filters = ({ setFilterData, filterData }) => {
    const handleFilter = (filter) => {
        setFilterData(filter);
    };

    return (
        <div className="flex justify-center gap-4 p-4 mt-3">
            <button onClick={() => handleFilter('all')} className={`filter-btn ${filterData === 'all' ? 'active' : ''}`}>All</button>
            <button onClick={() => handleFilter("men's clothing")} className={`filter-btn ${filterData === "men's clothing" ? 'active' : ''}`}>Men's Clothing</button>
            <button onClick={() => handleFilter("women's clothing")} className={`filter-btn ${filterData === "women's clothing" ? 'active' : ''}`}>Women's Clothing</button>
            <button onClick={() => handleFilter('jewelery')} className={`filter-btn ${filterData === 'jewelery' ? 'active' : ''}`}>Jewelery</button>
            <button onClick={() => handleFilter('electronics')} className={`filter-btn ${filterData === 'electronics' ? 'active' : ''}`}>Electronics</button>
        </div>
    )
}

export default Filters
