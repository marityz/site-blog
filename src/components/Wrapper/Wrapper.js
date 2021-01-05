import React from 'react';
import './Wrapper.css';
import Slider from "react-slick";
import {Trans} from '@lingui/macro';


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
        // autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplaySpeed: 6000,
                    speed: 6000,
                    cssEase: "ease"
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    speed: 6000,
                    autoplaySpeed: 6000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                }
            }
        ]
    };

    return (
        <div className='block-carousel'>
            <p className="title"><Trans> work of artist Tuzikova Irina</Trans></p>
            <Slider {...settings}>
                <div className='item slide1' >

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
        </div>
    )


};

export default Wrapper;
