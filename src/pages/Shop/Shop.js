import './Shop.css'
import React from 'react';
import Header from "../../components/Header/Header";
import Items from "../../components/Items/Items";
import paintings from "../../const/paintings"
import Footer from "../../components/Footer/Footer";
import Api from "../../components/Api/Api";

function Shop(props) {


    return (
        < div className='home-page'>
            <Header cart={props.cart} removeFromCart={props.removeFromCart} api = {new Api()}/>
            <Items paintings={paintings} updateCart={props.updateCart} cart={props.cart}
                   removeFromCart={props.removeFromCart}/>
            <Footer/>
        </div>
    )

}

export default Shop;
