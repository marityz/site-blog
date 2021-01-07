import React from 'react';
import './LanguageSelector.css';
import ContextLanguage from "../../context/contextLanguage";

import {i18n} from '@lingui/core'
import {I18nProvider} from '@lingui/react'


function LanguageSelector() {



    return (
        <I18nProvider i18n={i18n}>
            <div className="select">
                <ContextLanguage.Consumer>
                    {({language, toggleLanguage}) => (
                        <select onChange={(event)=>{
                            toggleLanguage(event.target.value)}
                          } value={language}>
                            <option value="en">En</option>
                            <option value="ru">Ru</option>
                        </select>
                    )}

                </ContextLanguage.Consumer>
            </div>
        </I18nProvider>
    );
}

export default LanguageSelector;
