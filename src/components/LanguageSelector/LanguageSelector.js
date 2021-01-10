import React from 'react';
import './LanguageSelector.css';
import ContextLanguage from "../../context/contextLanguage";
import "../../fonts/font-awesome-4.7.0/css/font-awesome.css"


import {i18n} from '@lingui/core'
import {I18nProvider} from '@lingui/react'


function LanguageSelector() {



    return (
        <I18nProvider i18n={i18n}>
            <div className="select" >

                <ContextLanguage.Consumer>
                    {({language, toggleLanguage}) => (
                        <select className="select__language active" onChange={(event) => {
                            toggleLanguage(event.target.value)
                        }
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
