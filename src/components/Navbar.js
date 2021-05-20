import React, { useState } from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';
import {Link} from 'react-router-dom';
import logo from './images/icon3.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 1200) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 1200) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return(
        <>
            <nav className='navbar'>
                <img src={logo} className="logo-rooney" alt="logo"/>
                <Link to='/Home' className='navbar-logo'>
                    Fut Stars
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' 
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <Link to='/Players' className='nav-links' onClick={closeMobileMenu}>
                                Players <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown && <Dropdown/>}
                        </li>
                        <li className='nav-item'>
                            <Link to='/Comparison' className='nav-links' onClick={closeMobileMenu}>
                                Comparison
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Wishlist' className='nav-links' onClick={closeMobileMenu}>
                                Wishlist
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Recommendation' className='nav-links' onClick={closeMobileMenu}>
                                Recommendation
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Logout' className='nav-links' onClick={closeMobileMenu}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;