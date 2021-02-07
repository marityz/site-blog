import React, {useState, useCallback, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'
import PropTypes from 'prop-types';
import imgClose from '../../images/close-popup.svg';
import ModalCard from "../ModalCard/ModalCard";
import NavBar from "../NavBar/NavBar";



function Modal(props) {
    const [closeModal, setCloseModal] = useState(false);
    const myRef = useRef(null);

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            handlerClick();
        }
    }, []);

    const handleClickOutside = useCallback((event) => {
        if (!myRef.current.contains(event.target)) {
            handlerClick();
        }

    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", escFunction, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);



    const handlerClick = () => {
        setCloseModal(true);
        props.close(false);
    };


    if (closeModal) {
        return (
            <>
            </>
        )
    } else {
        return (
            <>
                <div className="modal modal_is-opened">

                    <div className='modal__content modal__content_margin' ref={myRef}>
                        <img src={imgClose} alt="кнопка закрытия"
                             className="modal__close" onClick={handlerClick}/>
                        <ModalCard   cart = {props.cart}  removeFromCart={props.removeFromCart} api = {props.api}/>
                    </div>
                </div>
            </>
        )
    }

}


Modal.prototype = {
    cart: PropTypes.object,
    removeFromCart: PropTypes.func,
    api: PropTypes.object,
    close:PropTypes.func,
};

export default Modal;
