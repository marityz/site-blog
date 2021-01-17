import './Shop.css'
import React from 'react';
import Header from "../../components/Header/Header";
import Items from "../../components/Items/Items";
import paintings from "../../const/paintings"
import Footer from "../../components/Footer/Footer";

function Shop() {

    const [removePaintingCard, setRemovePaintingCard] = React.useState(false);

    const checkDeletePaintingInCard = (status) => {
        setRemovePaintingCard(status);
    };

    console.log(checkDeletePaintingInCard );

    return(
        < div className='home-page'>
            <Header statusPaintingInCard = {checkDeletePaintingInCard}/>
            <Items paintings = {paintings} />
            <Footer/>
        </div>
    )

}

export default Shop;
