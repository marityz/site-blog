import React from 'react';
import './ModalCard.css'
import PropTypes from 'prop-types';
import FormCard from "../FormCard/FormCard";
import ContentCard from "../ContentCard/ContentCard";
import NavBar from "../NavBar/NavBar";


function ModalCard(props) {
    let paintingCard = [];

    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        if(key.includes('painting')){
            const test = JSON.parse (localStorage.getItem (key));
            paintingCard.push(test);

        }

    }

    return (
        <div className='modal-card'>
            <h1 className='modal-card__title'>Спасибо за заказ: </h1>
            <ContentCard paintingCard = {paintingCard} statusPaintingInCard={props.statusPaintingInCard} />
            <FormCard/>

        </div>
    )

}


ModalCard.prototype = {
    paintings: PropTypes.array,
};

export default ModalCard;
