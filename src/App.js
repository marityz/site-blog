import './App.css';
import React, { useState } from 'react';


import {
    Route,
    Redirect,
    BrowserRouter,
    withRouter,
    Switch,
} from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Shop from '../src/pages/Shop/Shop'

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { messages } from './locales/ru/messages.js';
import { messagesEn } from './locales/en/messages.js';

import ContextLanguage from "./context/contextLanguage";

i18n.load('en', messagesEn);
i18n.load('ru', messages);
i18n.activate(' ');



function App(props) {

    const [language,  setLanguage] = useState(' ');
    const [cart, setCart] = useState()
    const updateCart = () => {};
    const removeFromCart = () => {};
    const {history} = props;
    return (
        <I18nProvider i18n={i18n}>
            <ContextLanguage.Provider  value = {{language: language, toggleLanguage:(activeLang)=>{
                    setLanguage(activeLang);
                    i18n.activate(activeLang);
                }}}>
            <BrowserRouter>
            <Switch>
                <Route history={history} path='/home' component={Home }/>
                <Route history={history} path='/shop' component={Shop}/>
                <Redirect from='/' to='/home'/>
            </Switch>
        </BrowserRouter>
            </ContextLanguage.Provider>

        </I18nProvider>
    );
}


export default withRouter(App)
