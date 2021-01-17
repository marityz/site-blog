import React, {useState} from 'react';
import './Painting.css';
import {Trans} from '@lingui/macro';


function Painting(props) {
    const [paintingAddCard, setPaintingAddCard] = useState(false);
    //const [products, setProducts] = useState([ ]);

    const checkIfAdd = product => {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.includes(`painting ${product.id}`)) {
                return setPaintingAddCard(!paintingAddCard);
            }

        }
    };

    const handleAddProductToCart = product => {
        localStorage.setItem(`painting ${product.id}`, JSON.stringify(product));
        setPaintingAddCard(!paintingAddCard)

    };

    const handlerRemoveProductFromCart = product => {
        localStorage.removeItem(`painting ${product.id}`);
        setPaintingAddCard(!paintingAddCard)

    };


    return (


        <div className='painting'>
            <img className='painting__img' src={props.painting.src}/>
            <p className='painting__name'> {props.painting.name}</p>
            <p className='painting__description'>{props.painting.description}</p>
            <p className='painting__price'>{props.painting.price} $</p>
            {paintingAddCard || checkIfAdd(props.painting)?
                <button className={'painting__button incard'}
                        onClick={() => handlerRemoveProductFromCart(props.painting)}><Trans>Remove from cart </Trans>
                </button>
                :
                <button className={'painting__button'}
                        onClick={() => handleAddProductToCart(props.painting)}><Trans> Add to cart </Trans></button>
            }
        </div>

    )

}

export default Painting;
