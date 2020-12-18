import React from 'react';
import './Wrapper.css';
import Slider from "react-slick";

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'

const Wrapper = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: 'carousel',
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
    };

    return (
        <>
            <p className="title"> work of artist Tuzikova Irina</p>
            <Slider {...settings}>
                <div className='item'>

                    <img src={img1} className='imgItem'/>

                </div>
                <div className='item'>

                    <img src={img2} className='imgItem'/>
                </div>
                <div className='item'>

                    <img src={img3} className='imgItem'/>

                </div>
                <div className='item'>
                    <img src={img4} className='imgItem'/>
                </div>
                <div className='item'>
                    <img src={img5} className='imgItem'/>

                </div>
                <div className='item'>

                    <img src={img1} className='imgItem'/>

                </div>
                <div className='item'>

                    <img src={img2} className='imgItem'/>
                </div>
                <div className='item'>

                    <img src={img3} className='imgItem'/>

                </div>
                <div className='item'>
                    <img src={img4} className='imgItem'/>
                </div>
                <div className='item'>
                    <img src={img5} className='imgItem'/>

                </div>
            </Slider>
        </>
    )


};

export default Wrapper;
