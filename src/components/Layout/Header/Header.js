import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/icons/film-reel.svg'
const Header = ({ setSearchTerm, searchTerm }) => {
    const navigate = useNavigate()
    return (
        <header>
            <div className='title-container'>
                {/* <h3 className='logo' onClick={() => navigate('/')}>The Movie App</h3> */}
                <img src={logo} alt='logo' onClick={() => navigate('/')}/>
            </div>

            <nav>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/upcoming')}>Up Coming</li>
                    <li onClick={() => navigate('/trending')}>Trending</li>
                    <li>Popular</li>

                </ul>
            </nav>
        </header>
    )
}

export default Header