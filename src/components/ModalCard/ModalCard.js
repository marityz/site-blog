import React from 'react';
import './ModalCard.css'
import PropTypes from 'prop-types';
import FormCard from "../FormCard/FormCard";


function ModalCard(props) {

    return (
        <div className='modal-card'>
            <h1 className='modal-card__title'>Спасибо за заказ: </h1>
            <FormCard/>



        </div>
    )

}


ModalCard.prototype = {
    paintings: PropTypes.array,
};

export default ModalCard;
