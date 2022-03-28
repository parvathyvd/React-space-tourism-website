import React, { useState } from 'react';
import Header from './Header';
import data from '../data.json'
import TechnologyInfo from './TechnologyInfo';

const Technology = () => {
    const [chooseTech, setChooseTech] = useState(1);
    const [techActive, setTechActive] = useState('');

    const onTechClickHandler = (e) =>{
        setChooseTech(parseInt(e.target.value));
        console.log('clicked',chooseTech);
        setTechActive('active')
        let classNameActive = 'tech__num active';
    }

    return (
        <div className='technology'>
            <Header/>
            <div className="small__heading-tech">
                    <h2 className='small__heading-tech'><span className="num">03</span><span className='small__heading-text'>SPACE LAUNCH 101</span></h2>
                </div>
            <div className="tech__container">
            <div className="tech__numbers">
                {data.technology.map((tech,index)=>{
                    console.log('....', tech.id, chooseTech)
                    return <button className={techActive==='active' && tech.id === chooseTech ? 'tech__num active' : 'tech__num'} key={index} value={tech.id} onClick={onTechClickHandler}>
                                {tech.id}
                             </button>
                })}
                </div>
                {data.technology.map((tech,index)=>{
                    return <TechnologyInfo technology={tech}
                    selected ={chooseTech} />
                })}
            </div>
        </div>
    );
};

export default Technology;