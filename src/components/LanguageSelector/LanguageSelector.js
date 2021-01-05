import React from 'react';
import './LanguageSelector.css'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages } from '../../locales/ru/messages.js'

i18n.load('ru', messages);

function LanguageSelector() {

    function handleChange(event) {
        event.preventDefault();
        i18n.activate(event.target.value);
    }

    return (
        <I18nProvider i18n={i18n}>
        <div >
            <select onChange={handleChange}  className="select">
                <option value="en" className="select__language">English</option>
                <option value="ru" className="select__language">Russia</option>
            </select>
        </div>
        </I18nProvider>
    );
}

export default LanguageSelector;
