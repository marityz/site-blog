import React from 'react';
import './ContentCard.css'
import PropTypes from 'prop-types';
import CardItem from "../CardItem/CardItem";
import {Trans} from '@lingui/macro';



function ContentCard(props) {

    const getCartItems = (itemsInCart) => {
        const arrayCartItems = [];
        for (let key in itemsInCart) {
            arrayCartItems.push(itemsInCart[key]);
        }

        return arrayCartItems;
    };



    return (
        <div className='content-card'>
            {Object.keys(props.cart).length === 0 ?
                <div><Trans>There is nothing in the basket</Trans></div> :
                getCartItems(props.cart).map((painting, index) => {
                    return <CardItem painting={painting}  key = {index} removeFromCart={props.removeFromCart}/>
                })

            }
        </div>
    )

}


ContentCard.prototype = {
    paintings: PropTypes.array,
    cart: PropTypes.object,
    removeFromCart: PropTypes.func,
};

export default ContentCard;
