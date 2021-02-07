import React from 'react';
import "./Header.css"
import NavBar from "../NavBar/NavBar";
import PropTypes from 'prop-types';

function Header(props) {

    return (
        <>
            <header className='header'>
                <NavBar cart = {props.cart}  removeFromCart={props.removeFromCart} api = {props.api}/>
            </header>
        </>

    )

}


Header.propTypes = {
    cart: PropTypes.object,
    removeFromCart: PropTypes.func,
    api:PropTypes.object
};

export default Header;
