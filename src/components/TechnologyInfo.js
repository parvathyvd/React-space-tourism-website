import React, { useState } from "react";
import data from "../data.json";


const TechnologyInfo = ({ technology, techActive, chooseTech,setChooseTech, setTechActive }) => {
  

  const onTechClickHandler = (e) =>{
    setChooseTech(parseInt(e.target.value));
    // console.log('clicked',chooseTech);
    setTechActive('active')
}
  return (
    <>
      {technology.id === chooseTech && (
        <div>
          <div className="tech__info">
          <div className="tech__numbers">
                {data.technology.map((tech,index)=>{
                    return <button className={techActive==='active' && tech.id === chooseTech ? 'tech__num active' : 'tech__num'} key={index} value={tech.id} onClick={onTechClickHandler}>
                                {tech.id}
                             </button>
                })}
                </div>
            <div className="tech__info-detail">
                <h4 className="terminology">THE TERMINOLOGY…</h4>
            <h3 className='tech__name'>{technology.name}</h3>
                <p className='tech__description'>{technology.description}</p>
            
            </div>

            <div className="tech__image">
              <img src={technology.images.portrait} alt="space tourism" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TechnologyInfo;
