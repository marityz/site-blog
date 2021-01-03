import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <section className='footer'>
            <div className='footer__copyright'>&copy; 2021</div>
            <ul className='contact'>
                <li className=' contact__link contact__youtube fa fa-youtube-play fa-2x ' >
                    <a href='' target="_blank" />
                </li>
                <li className=' contact__link contact__inst fa fa-instagram fa-2x '>
                    <a href='' target="_blank"/>
                </li>
                <li className='contact__link contact__gmail fa fa-envelope fa-2x '>
                    <a href='' target="_blank"/>
                </li>
                <li className=' contact__link contact__vk fa fa-vk fa-2x '>
                    <a href='' target="_blank"/>
                </li>
                <li className=' contact__link contact__telegram fa fa-telegram fa-2x '>
                    <a href='' target="_blank"/>
                </li>
            </ul>

        </section>
    )

}

export default Footer;
