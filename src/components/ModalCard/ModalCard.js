import React from 'react';
import './ModalCard.css'
import PropTypes from 'prop-types';
import FormCard from "../FormCard/FormCard";
import ContentCard from "../ContentCard/ContentCard";


function ModalCard(props) {


    return (
        <div className='modal-card'>
            <h1 className='modal-card__title'>Спасибо за заказ: </h1>
            <ContentCard   cart = {props.cart} removeFromCart={props.removeFromCart} />
            <FormCard/>

        </div>
    )

}


ModalCard.prototype = {
    paintings: PropTypes.array,
};

export default ModalCard;
