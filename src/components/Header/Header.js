import React from 'react'
import './Header.css'
const Header = ({setSearchTerm,searchTerm}) => {
    return (
        <header>
            <div className='title-container'>
                <h3 className='header'>The Movie App</h3>
                <p className='title'>Find your movies</p>
            </div>
            <input
                className="search"
                type="text"
                placeholder="Type Movie Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </header>
    )
}

export default Header