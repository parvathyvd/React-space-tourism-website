import React, { useRef, useState } from 'react';
import Header from './Header';
import data from '../data.json';
import DestinationSingle from './DestinationSingle';

const Destination = () => {
    const [curDestination, setCurDestination] = useState('Moon');
    const [activeClass, setActiveClass] = useState('acitve')
    const destinationList = useRef('');
    const renderDestination =  data.destinations.map((dest)=>{
        return <DestinationSingle destination={dest} curDestination={curDestination}/>
    })
    const onDestinationChangeHandler = (e) => {
        e.preventDefault();
        console.log('click', e.target.value);
        setCurDestination(e.target.value);
        setActiveClass('active');
    }
    return (
        <>
        <div className='destination'>
        <Header/>
            <div className="destination__container">
                <div className="small__heading">
                <h2 className='small__heading-h2'><span className="num">01</span><span className='small__heading-text'>Pick your destination</span></h2>
                </div>
                <div className="destination-list">
                    <ul>
                    {data.destinations.map((destin)=>{
                        return <li><button className={(activeClass && destin.name === curDestination)? 'btn-nav active' : 'btn-nav' } ref={destinationList} value={destin.name} onClick={onDestinationChangeHandler}>{destin.name}</button></li>
                    })}
                    </ul>
                    </div>
               {renderDestination}
            </div>
        </div>
        </>
        
    );
};

export default Destination;