import './Shop.css'
import React, {Fragment} from 'react';
import Header from "../../components/Header/Header";
import Items from "../../components/Items/Items";


function Shop() {

    return(
        < div className='home-page'>
            <Header/>
            <Items/>
        </div>
    )

}

export default Shop;
