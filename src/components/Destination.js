import React, {useState } from 'react';
import data from '../data.json';
import Header from './Header';
import DestinationSingle from './DestinationSingle';

const Destination = () => {
    const [curDestination, setCurDestination] = useState('Moon');
    const [activeClass, setActiveClass] = useState('acitve')
    const renderDestination =  data.destinations.map((dest)=>{
        return <DestinationSingle destination={dest} curDestination={curDestination} setCurDestination={setCurDestination} activeClass={activeClass} setActiveClass={setActiveClass} />
    })
    return (
        <>
        <div className='destination'>
        <Header/>
            <div className="destination__container">
                <div className="small__heading">
                <h2 className='small__heading-h2'><span className="num">01</span><span className='small__heading-text'>Pick your destination</span></h2>
                </div>
               {renderDestination}
            </div>
        </div>
        </>
        
    );
};

export default Destination;