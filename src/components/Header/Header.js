import React from 'react';
import "./Header.css"
import NavBar from "../NavBar/NavBar";


function Header(props) {

    return (
        <>
            <header className='header'>
                <NavBar cart = {props.cart}  removeFromCart={props.removeFromCart}/>
            </header>
        </>

    )

}

export default Header;
