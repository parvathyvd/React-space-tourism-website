import React from 'react';


const CrewInfo = ({cr,crewId}) => {
    return ( 
            <>
                    {cr.id === crewId &&
                    <>
                <div className="crew__info">
                <h3 className='crew__role'>{cr.role}</h3>
                 <h1 className='crew__name'>{cr.name}</h1>   
                 <p className='crew__bio'>{cr.bio}</p> 
            </div>
            <div className="crew-image">
            <img src={cr.images.png} alt={cr.name} />
            </div>
            </>
}
            </>)  
     
};

export default CrewInfo;