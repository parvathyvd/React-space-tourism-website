import React, { useState } from 'react';
import data from '../data.json';

const CrewInfo = ({ cr, crewId, setSelectCrewID }) => {
    const [activeClass, setActiveClass] = useState('active')
    const onDotClickHandler = (e) =>{
        // console.log('click', e.target.value);
        setSelectCrewID(parseInt(e.target.value));
        setActiveClass('active');
    }
  return (
    <>
      {cr.id === crewId && (
        <div className='crew__details'>
          <div className="crew__info">
              <div className="crew__info-details">
              <h3 className="crew__role">{cr.role}</h3>
            <h1 className="crew__name">{cr.name}</h1>
            <p className="crew__bio">{cr.bio}</p>
                  </div>
           
            <div className="crew__select">
                {data.crew.map((crewSelect, indexId)=>{
                   return( 
                    <button onClick={onDotClickHandler} className={activeClass ==='active' && indexId === crewId ? 'dots active' : 'dots'} value={indexId} key={indexId}>&nbsp;</button>
                   )
                })}
        </div>
          </div>
          <div className="crew-image">
            <img src={cr.images.png} alt={cr.name} />
          </div>
      
        </div>
      )}
     
    </>
  );
};

export default CrewInfo;
