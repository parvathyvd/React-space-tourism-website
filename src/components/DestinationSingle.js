import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import data from '../data.json'

const DestinationSingle = ({destination, curDestination}) => {
    return (
        <>
        {destination.name === curDestination &&
        <div className='destination-single'>
             <div className="destination-image">
                    <img src={destination.images.png} alt={destination.name} />
                </div>
                <div className="destination__desc">
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