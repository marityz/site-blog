import React from 'react';
import './CardItem.css'
import PropTypes from 'prop-types';
import deleteImg from  '../../images/close-popup-black.svg'
import NavBar from "../NavBar/NavBar";



function CardItem(props) {
    const [item, setItem] = React.useState(true);

    const deleteItem = () => {
        localStorage.removeItem(`painting ${props.painting.id}`);
        setItem(false);
        props.statusPaintingInCard(true);

    };

    return(
        <>
        {
            item?
                <div className='card-item'>
                    <img className='card-item__img' src={props.painting.src}/>
                    <div className='card-item__description'>
                        <p className='card-item__name'>{props.painting.name}</p>
                        <p className='card-item__text'>{props.painting.description}</p>
                        <p className='card-item__price'>{props.painting.price}</p>
                    </div>
                    <img className='card-item__delete' src={deleteImg} onClick={deleteItem}/>
                </div> : ' '

        }
        </>
    )

}

CardItem.prototype = {

};

export default CardItem
