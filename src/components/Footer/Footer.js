import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <section className='footer'>
            <div className='footer__copyright'>&copy; 2021</div>
            <ul className='contact'>
                <li className=' contact__link contact__youtube fa fa-youtube-play' >
                    <a href='' target="_blank" />
                </li>
                <li className=' contact__link contact__inst fa fa-instagram'>
                    <a href='' target="_blank"/>
                </li>
                <li className='contact__link contact__gmail fa fa-envelope'>
                    <a href='' target="_blank"/>
                </li>
                <li className=' contact__link contact__vk fa fa-vk'>
                    <a href='' target="_blank"/>
                </li>
                <li className=' contact__link contact__telegram fa fa-telegram'>
                    <a href='' target="_blank"/>
                </li>
            </ul>

        </section>
    )

}

export default Footer;
