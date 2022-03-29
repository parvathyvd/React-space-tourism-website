import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';

const Home = () => {
    return (
        <section className='home'>
                        <Header/>

            <div className="home__container">
                <div className="home__headings">
                <h1 className='home__heading'>
                SO, YOU WANT TO TRAVEL TO
                <span className='heading-big'>
                    SPACE
                </span>
                </h1>
                <p className='home__text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="home__explore">
                    <NavLink to='/destination'>
                    <nav href='/destination'>EXPLORE</nav>
                    </NavLink>
                </div>
            </div>
        </section>
      
    );
};

export default Home;