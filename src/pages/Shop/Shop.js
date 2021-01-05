import './Shop.css'
import React from 'react';
import Header from "../../components/Header/Header";
import Items from "../../components/Items/Items";
import paintings from "../../const/paintings"

function Shop() {

    return(
        < div className='home-page'>
            <Header/>
            <Items paintings = {paintings}/>
        </div>
    )

}

export default Shop;
