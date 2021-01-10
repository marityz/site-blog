import './Shop.css'
import React from 'react';
import Header from "../../components/Header/Header";
import Items from "../../components/Items/Items";
import paintings from "../../const/paintings"
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";

function Shop() {

    return(
        < div className='home-page'>
            <Header/>
            <Items paintings = {paintings}/>
            <Footer/>
            <Modal/>
        </div>
    )

}

export default Shop;
