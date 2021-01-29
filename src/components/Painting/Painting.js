import React, {useState} from 'react';
import './Painting.css';
import {Trans} from '@lingui/macro';


function Painting(props) {
    const checkPaintingInCart = () => {
        let isPaintingToCart = false;
        for (let key in props.cart) {
            if (+key === props.painting.id) {
                isPaintingToCart = true;
            }

        }
        return isPaintingToCart;

    };

    const [isPaintingInCart, setButtonPaintingInCart] = useState(checkPaintingInCart);


    const handlerDeleteInCart = () => {
        setButtonPaintingInCart(!isPaintingInCart);
        props.removeFromCart(props.painting);
    };

    const handlerAddToCart = () => {
        setButtonPaintingInCart(!isPaintingInCart);
        props.updateCart(props.painting);
    };


    return (

        <div className='painting'>
            <img className='painting__img' src={props.painting.src}/>
            <p className='painting__name'> {props.painting.name}</p>
            <p className='painting__description'>{props.painting.description}</p>
            <p className='painting__price'>{props.painting.price} $</p>
            {checkPaintingInCart() ?
                <button className={'painting__button incart'}
                        onClick={() => {
                            handlerDeleteInCart()
                        }}><Trans>убрать из корзины</Trans>
                </button> :
                <button className={'painting__button'}
                        onClick={() => {
                            handlerAddToCart()
                        }}><Trans>Add to cart</Trans>
                </button>
            }
        </div>

    )

}

export default Painting;
