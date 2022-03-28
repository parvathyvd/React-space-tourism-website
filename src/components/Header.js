import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <div className="header-logo">
                    <img src='./assets/shared/logo.svg' alt="header-logo" />
                </div>
                <div className='header-line'>
                </div>
                <nav className='header__nav'>
                    <ul className='header__links'>
                    <div className="navlinks">
                    <NavLink to='/'>
                        <li className='header__link'>00<span className="header__link-text">HOME</span></li>
                    </NavLink>
                    </div>
                    <div className="navlinks">
                    <NavLink to='/destination'>
                        <li className='header__link'>01<span className="header__link-text">DESTINATION</span></li>
                    </NavLink>
                    </div>
                    <div className="navlinks">
                    <NavLink to='/crew'>
                        <li className='header__link'>02<span className="header__link-text">CREW</span></li>
                    </NavLink>
                    </div>
                    <div className="navlinks">
                    <NavLink to='/technology'>
                        <li className='header__link'>03<span className="header__link-text">TECHNOLOGY</span></li>
                    </NavLink>
                    </div>
                    </ul>
                </nav>
                {/* <div className="header__mobile">
                    <img src="./assets/shared/icon-hamburger.svg" alt="hamburger icon" />
                </div> */}
            </div>
           
        </header>
    );
};

export default Header;