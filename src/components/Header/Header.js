import React from 'react';
import "./Header.css"
import NavBar from "../NavBar/NavBar";


function Header(props) {

    return (
        <>
            <header className='header'>
                <NavBar statusPaintingInCard={props.statusPaintingInCard} />
            </header>
        </>

    )

}

export default Header;
