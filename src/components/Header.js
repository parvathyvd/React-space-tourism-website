import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const onOpenHandler = () => {
    console.log('click', navOpen);
    setNavOpen(!navOpen);
  }
  const oncloseHandler = () => {
    setNavOpen(false);
  }
  return (
    <header>
      <div className="header__container">
        <NavLink to="/">
          <div className="header-logo">
            <img src="./assets/shared/logo.svg" alt="header-logo" />
          </div>
        </NavLink>
        <div className="header-line"></div>
        <nav className="header__nav">
          <ul className="header__links">
            <div className="navlinks">
              <NavLink to="/">
                <li className="header__link">
                  00<span className="header__link-text">HOME</span>
                </li>
              </NavLink>
            </div>
            <div className="navlinks">
              <NavLink to="/destination">
                <li className="header__link">
                  01<span className="header__link-text">DESTINATION</span>
                </li>
              </NavLink>
            </div>
            <div className="navlinks">
              <NavLink to="/crew">
                <li className="header__link">
                  02<span className="header__link-text">CREW</span>
                </li>
              </NavLink>
            </div>
            <div className="navlinks">
              <NavLink to="/technology">
                <li className="header__link">
                  03<span className="header__link-text">TECHNOLOGY</span>
                </li>
              </NavLink>
            </div>
          </ul>
        </nav>
        {!navOpen &&
        <div className="header__mobile-nav-open" onClick={onOpenHandler}>
          <img src="./assets/shared/icon-hamburger.svg" alt="hamburger icon" />
          </div>
          }
          {navOpen &&
        <aside className="header__mobile">
          <div className="header__mobile-nav-wrapper">
            <div className="header__mobile-nav-close">
              <img src="./assets/shared/icon-close.svg" alt="close icon" onClick={oncloseHandler}/>
            </div>
            <nav>
              <ul className="header__links">
                <div className="navlinks">
                  <NavLink to="/">
                    <li className="header__link">
                      00<span className="header__link-text">HOME</span>
                    </li>
                  </NavLink>
                </div>
                <div className="navlinks">
                  <NavLink to="/destination">
                    <li className="header__link">
                      01<span className="header__link-text">DESTINATION</span>
                    </li>
                  </NavLink>
                </div>
                <div className="navlinks">
                  <NavLink to="/crew">
                    <li className="header__link">
                      02<span className="header__link-text">CREW</span>
                    </li>
                  </NavLink>
                </div>
                <div className="navlinks">
                  <NavLink to="/technology">
                    <li className="header__link">
                      03<span className="header__link-text">TECHNOLOGY</span>
                    </li>
                  </NavLink>
                </div>
              </ul>
            </nav>
          </div>
        </aside>
          }
      </div>
    </header>
  );
};

export default Header;
