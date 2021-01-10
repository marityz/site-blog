import React from 'react';
import './Modal.css'
import PropTypes from 'prop-types';
import imgClose from '../../images/close-popup.svg';
import ModalCard from "../ModalCard/ModalCard";


function Modal(props) {

    return (
        <>
            <div className="modal modal_is-opened">
                <div className='modal__content modal__content_margin'>
                    <img src={imgClose} alt="кнопка закрытия"
                         className="modal__close"/>

                     <ModalCard/>
                </div>
            </div>
        </>
    )

}


Modal.prototype = {};

export default Modal;
