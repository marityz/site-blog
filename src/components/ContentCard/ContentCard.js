import React from 'react';
import './ContentCard.css'
import PropTypes from 'prop-types';
import CardItem from "../CardItem/CardItem";


function ContentCard(props) {

    const getCartItems = (itemsInCart) => {
        console.log(itemsInCart);
        const arrayCartItems = [];
        for (let key in itemsInCart) {
            arrayCartItems.push(itemsInCart[key]);
        }

        return arrayCartItems;
    };



    return (
        <div className='content-card'>
            {Object.keys(props.cart).length === 0 ?
                <div> Нет ничего в корзине</div> :
                getCartItems(props.cart).map((painting, index) => {
                    return <CardItem painting={painting}  key = {index} removeFromCart={props.removeFromCart}/>
                })

            }
        </div>
    )

}


ContentCard.prototype = {};

export default ContentCard;
