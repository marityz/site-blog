import React from 'react';
import './Items.css'
import Painting from "../Painting/Painting";
import PropTypes from 'prop-types';


function Items(props) {

    return (
        <section className='items'>
            {props.paintings.map((painting) => {
                return <Painting painting={painting} key={painting.id} updateCart={props.updateCart} cart={props.cart}
                                 removeFromCart={props.removeFromCart}/>
            })}

        </section>
    )

}

Items.prototype = {
    paintings: PropTypes.array,
};

export default Items;
