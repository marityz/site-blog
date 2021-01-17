import React from 'react';
import './ContentCard.css'
import PropTypes from 'prop-types';
import CardItem from "../CardItem/CardItem";
import NavBar from "../NavBar/NavBar";


function ContentCard(props) {



    return (
        <div className='content-card'>
            {(props.paintingCard.length === 0)?
                <div> Нет ничего в корзине</div> :
                props.paintingCard.map((painting, index) => {
                return <CardItem key={index} painting = {painting} statusPaintingInCard={props.statusPaintingInCard} />
            })

            }
        </div>
    )

}


ContentCard.prototype = {};

export default ContentCard;
