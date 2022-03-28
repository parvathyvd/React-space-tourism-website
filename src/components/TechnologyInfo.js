import React, { useState } from "react";
import data from "../data.json";

const TechnologyInfo = ({ technology, selected }) => {
  return (
    <>
      {technology.id === selected && (
        <div>
          <div className="tech__info">
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
