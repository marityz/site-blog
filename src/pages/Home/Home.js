import './Home.css'
import React from 'react';
import Header from "../../components/Header/Header";
import Wrapper from "../../components/Wrapper/Wrapper";

function Home(props) {
    return(
        < div  className='home-page'>
        <Header/>
        <Wrapper/>
        </div>

    )


}


export default Home;
