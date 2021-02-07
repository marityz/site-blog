import React from 'react';
import './FormCard.css'
import PropTypes from 'prop-types';
import ReCAPTCHA from "react-google-recaptcha";
import {Trans} from '@lingui/macro';




function FormCard(props) {

    const [formParams, setFormParams] = React.useState({});


    const handlerInputForm = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let formParam = {...formParams,[name]: value} ;
        setFormParams(formParam);


    };


    const handlerFormCart = (event) => {
        event.preventDefault();
        console.log(formParams);
        props.sendAnOrder(formParams)
    };



    return (

        <form className='form-card' action="?" method="POST" onSubmit={ handlerFormCart }>
            <p className="form-card__input-description popup__input-description_margin required"><Trans>Full Name </Trans></p>
            <input type="text" name="name" id="name"
                   className="form-card__input form-card__input_type_name "
                   placeholder="" required onChange={handlerInputForm}/>
            <span className="text-error" id="name-error"> </span>

            <p className="form-card__input-description popup__input-description_margin required"><Trans>Email </Trans></p>
            <input type="email" name="email" id="email"
                   className="form-card__input form-card__input_type_email"
                   placeholder="" required onChange={handlerInputForm}/>
            <span className="text-error" id="email-error"> </span>


            <p className="form-card__input-description popup__input-description_margin required"><Trans>Phone </Trans></p>
            <input type="text" name="phone" id="phone"
                   className="form-card__input form-card__input_type_phone"
                   placeholder="" required onChange={handlerInputForm}/>
            <span className="text-error" id="phone-error"> </span>

            <p className="form-card__input-description popup__input-description_margin required"> <Trans>Address </Trans></p>
            <input type="text" name="address" id="address"
                   className="form-card__input form-card__input_type_address"
                   placeholder="" onChange={handlerInputForm}/>
            <span className="text-error" id="address-error"> </span>


            <p className="form-card__input-description popup__input-description_margin"><Trans>Comment </Trans></p>
            <textarea name="comment" id="comment"
                      className="form-card__input form-card__input_type_comment"
                      placeholder="" wrap="soft" onChange={handlerInputForm}/>


            <ReCAPTCHA className ="recapcha"
                sitekey="6LeJj0QaAAAAAIuSLKva76ils4BFy2sO2aXqpevB"
            />


            <div className="form-card__button-align">
                <p className="text-error" id="buttonreg-error"></p>
                <button className="button form-card__button form-card__button_margin form-card__button_valid"
                        name="button"
                        id="button" > <Trans>Place an order </Trans>
                </button>
            </div>


        </form>
    )


}


FormCard.prototype = {};

export default FormCard;
