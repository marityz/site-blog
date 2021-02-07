import React from 'react';
import './ModalCard.css'
import PropTypes from 'prop-types';
import FormCard from "../FormCard/FormCard";
import ContentCard from "../ContentCard/ContentCard";
import {Trans} from '@lingui/macro';


function ModalCard(props) {


    const sendAnOrder = (body) => {
        const request = {...body, ['items']: props.cart};
        props.api.shopRequest(request)
            .then((res) => {
                console.log(res);
            })


    };


    return (
        <div className='modal-card'>
            <h1 className='modal-card__title'><Trans>Thank you for ordering:  </Trans></h1>
            <ContentCard cart={props.cart} removeFromCart={props.removeFromCart}/>
            {Object.keys(props.cart).length === 0 ? " " :
                <FormCard sendAnOrder={sendAnOrder}/>
            }

        </div>
    )

}


ModalCard.prototype = {
    paintings: PropTypes.array,
    cart: PropTypes.object,
    removeFromCart: PropTypes.func,
    api:PropTypes.object
};

export default ModalCard;
