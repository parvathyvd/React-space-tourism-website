import React, { useState } from 'react';
import Header from './Header';
import data from '../data.json'
import TechnologyInfo from './TechnologyInfo';

const Technology = () => {
    const [chooseTech, setChooseTech] = useState(1);
    const [techActive, setTechActive] = useState('active');

    return (
        <section className='technology'>
            <Header/>
            <div className="small__heading-tech">
                    <h2 className='small__heading-tech-h2'><span className="num">03</span><span className='small__heading-text'>SPACE LAUNCH 101</span></h2>
                </div>
            <div className="tech__container">
                {data.technology.map((tech,index)=>{
                    return <TechnologyInfo technology={tech} chooseTech={chooseTech}
                    techActive={techActive} setChooseTech={setChooseTech} setTechActive={setTechActive} key={index} />
                })}
            </div>
        </section>
    );
};

export default Technology;