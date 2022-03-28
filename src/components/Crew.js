import React, { useRef, useState } from 'react';
import Header from './Header';
import data from '../data.json';
import CrewInfo from './CrewInfo';

const Crew = () => {
    const [selectCrewID, setSelectCrewID] = useState(0);
    const [activeClass, setActiveClass] = useState('active')
    const dotRef = useRef(null)
    const onDotClickHandler = (e) =>{
        console.log('click', e.target.value);
        setSelectCrewID(parseInt(e.target.value));
        setActiveClass('active');
    }
    return (
        <div className='crew'>
            <Header/>
            <div className="crew__container">
                <div className="small__heading">
                    <h2 className='small__heading-crew'><span className="num">02</span><span className='small__heading-text'>Meet your crew</span></h2>
                </div>
                {data.crew.map((cr, index)=>{
                   return( 
                      <CrewInfo cr={cr} key={index} crewId={selectCrewID}/> 
                   )
                })}
                <div className="crew__select">
                {data.crew.map((crewSelect, indexId)=>{
                   return( 
                    <button ref={dotRef} onClick={onDotClickHandler} className={activeClass ==='active' && indexId === selectCrewID ? 'dots active' : 'dots'} value={indexId} key={indexId}>&nbsp;</button>
                   )
                })}
                </div>
            </div>
        </div>
    );
};

export default Crew;