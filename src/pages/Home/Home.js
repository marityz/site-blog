import './Home.css'
import React from 'react';
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import About from "../../components/About/About"
import Footer from "../../components/Footer/Footer";
import Api from "../../components/Api/Api";
import PropTypes from 'prop-types';


function Home(props) {
    return(
        < div  className='home-page'>
        <Header cart = {props.cart} removeFromCart={props.removeFromCart} api = {new Api()}/>
        <Wrapper/>
        <About/>
        <Footer/>
        </div>

    )


}


Home.propTypes = {
    cart: PropTypes.object,
    removeFromCart: PropTypes.func,
};

export default Home;
