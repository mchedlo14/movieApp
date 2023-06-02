import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = ({setSearchTerm,searchTerm}) => {
    const navigate = useNavigate()
    return (
        <header>
            <div className='title-container'>
                <h3 className='logo' onClick={() => navigate('/')}>The Movie App</h3>
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