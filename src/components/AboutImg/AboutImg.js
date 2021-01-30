import React from 'react';
import './AboutImg.css';
import irk from '../../images/irk.png';
import irk3 from '../../images/irk3.png'
import irk2 from '../../images/irk4.png'

function AboutImg() {

    return(
        <div className='about-imgs'>
            <img className='about-img irk1' src={irk}/>
            <img className='about-img irk2' src={irk2}/>
            <img className='about-img irk3' src={irk3}/>
            </div>
    )

}

export default AboutImg;
