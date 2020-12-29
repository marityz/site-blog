import './Home.css'
import React from 'react';
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";
import About from "../../components/About/About"
import Footer from "../../components/Footer/Footer";

function Home(props) {
    return(
        < div  className='home-page'>
        <Header/>
        <Wrapper/>
        <About/>
        <Footer/>
        </div>

    )


}


export default Home;
