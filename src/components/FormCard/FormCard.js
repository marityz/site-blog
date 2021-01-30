import React from 'react';
import './FormCard.css'
import PropTypes from 'prop-types';


function FormCard(props) {
    return(

        <form className= 'form-card'>
            <p className="form-card__input-description popup__input-description_margin required">ФИО</p>
            <input type="text" name="name" id="name"
                   className="form-card__input form-card__input_type_name "
                   placeholder="" required/>
                <span className="text-error" id="name-error"> </span>

            <p className="form-card__input-description popup__input-description_margin required">Email</p>
            <input type="email" name="email" id="email"
                   className="form-card__input form-card__input_type_email"
                   placeholder="" required/>
            <span className="text-error" id="email-error"> </span>


            <p className="form-card__input-description popup__input-description_margin required">Телефон</p>
            <input type="text" name="phone" id="phone"
                   className="form-card__input form-card__input_type_phone"
                   placeholder="" required/>
            <span className="text-error" id="phone-error"> </span>

            <p className="form-card__input-description popup__input-description_margin">Адрес</p>
            <input type="text" name="address" id="address"
                   className="form-card__input form-card__input_type_address"
                   placeholder=""/>
            <span className="text-error" id="address-error"> </span>


            <p className="form-card__input-description popup__input-description_margin">Комментарий</p>
            <textarea  name="comment" id="comment"
                   className="form-card__input form-card__input_type_comment"
                   placeholder=""   wrap="soft"/>

            <div className="form-card__button-align">
                <p className="text-error" id="buttonreg-error"></p>
                <button className="button form-card__button form-card__button_margin form-card__button_valid" name="button"
                        id="button">Оформить заказ
                </button>
            </div>


            </form>
    )


}

FormCard.prototype = {

};

export default FormCard;
