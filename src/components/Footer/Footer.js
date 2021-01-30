import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <section className='footer'>

            <ul className='contact'>
                <li>
                    <a href='#' target="_blank" className='contact__link contact__youtube fa fa-youtube-play fa-2x'/>
                </li>
                <li>
                    <a href='#' target="_blank" className='contact__link contact__inst fa fa-instagram fa-2x'/>
                </li>
                <li>
                    <a href='mailto:irvituz@mail.ru' target="_blank"
                       className='contact__link contact__gmail fa fa-envelope fa-2x '/>
                </li>
                <li>
                    <a href='#' target="_blank" className=' contact__link contact__vk fa fa-vk fa-2x '/>
                </li>
                <li>
                    <a href='#' target="_blank" className=' contact__link contact__telegram fa fa-telegram fa-2x'/>
                </li>
            </ul>
            <div className='footer__copyright'>&copy; 2021</div>

        </section>
    )

}

export default Footer;
