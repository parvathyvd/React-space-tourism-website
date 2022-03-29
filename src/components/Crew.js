import React, { useState } from 'react';
import Header from './Header';
import data from '../data.json';
import CrewInfo from './CrewInfo';

const Crew = () => {
    const [selectCrewID, setSelectCrewID] = useState(0);

    return (
        <section className='crew'>
            <Header/>
            <div className="crew__container">
                <div className="">
                    <h2 className='small__heading-crew'><span className="num">02</span><span className='small__heading-text'>Meet your crew</span></h2>
                </div>
                {data.crew.map((cr, index)=>{
                   return( 
                      <CrewInfo cr={cr} key={index} crewId={selectCrewID} setSelectCrewID={setSelectCrewID}/> 
                   )
                })}
               
            </div>
        </section>
    );
};

export default Crew;