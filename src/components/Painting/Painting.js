import React from 'react';
import './Painting.css';
import { Trans } from '@lingui/macro';



function Painting(props) {
    return(
        <div className='painting'>
            <img className='painting__img' src={props.painting.src}/>
            <p className='painting__name'> {props.painting.name}</p>
            {/*<p className='painting__description'>{props.painting.name}</p>*/}
            <p className='painting__price'>{props.painting.price} $</p>
            <button className='painting__button'><Trans> Add to card </Trans></button>
        </div>
    )

}

export default Painting;
