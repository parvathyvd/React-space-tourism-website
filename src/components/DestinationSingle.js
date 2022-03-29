import React from 'react';
import data from '../data.json';

const DestinationSingle = ({destination, curDestination, activeClass, setActiveClass, setCurDestination}) => {
   
 
    const onDestinationChangeHandler = (e) => {
        e.preventDefault();
        // console.log('click', e.target.value);
        setCurDestination(e.target.value);
        setActiveClass('active');
    }
    return (
        <>
        {destination.name === curDestination &&
        <div className='destination-single'>
             <div className="destination-image">
                    <img src={destination.images.png} alt={destination.name} />
                </div>
                <div className="destination__desc">
                <div className="destination-list">
                    <ul>
                    {data.destinations.map((destin)=>{
                        return <li><button className={(activeClass && destin.name === curDestination)? 'btn-nav active' : 'btn-nav' } value={destin.name} onClick={onDestinationChangeHandler}>{destin.name}</button></li>
                    })}
                    </ul>
                    </div>
                    <h1 className='heading-big2'>{destination.name}</h1>
                    <p className='description'>{destination.description}</p>
                    <div className="destination__line">
                    </div>
                    <div className="destination__details">
                    <div className="avg__distance">
                        <h3>AVG. DISTANCE</h3>
                        <h2 className='detail-num'>{destination.distance}</h2>
                    </div>
                    <div className="avg__distance">
                        <h3>Est. travel time</h3>
                        <h2 className='detail-num'>{destination.travel}</h2>
                    </div>
                </div>
                </div>
        </div>
        }
        </>
        
    );
};

export default DestinationSingle;