import React from 'react';
import './Painting.css';

function Painting(props) {
    return(
        <div className='painting'>
            <img className='painting__img' src={props.painting.src}/>
            <p className='painting__name'> {props.painting.name}</p>
            <p className='painting__price'>{props.painting.price} $</p>
            <button className='painting__button'> Add to card</button>
        </div>
    )

}

export default Painting;
