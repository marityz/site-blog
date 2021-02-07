import './App.css';
import React, {useState} from 'react';


import {
    Route,
    Redirect,
    BrowserRouter,
    withRouter,
    HashRouter,
    Switch,
} from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Shop from '../src/pages/Shop/Shop'

import {i18n} from '@lingui/core';
import {I18nProvider} from '@lingui/react';
import {messages} from './locales/ru/messages.js';
import {messagesEn} from './locales/en/messages.js';

import ContextLanguage from "./context/contextLanguage";

i18n.load('en', messagesEn);
i18n.load('ru', messages);
i18n.activate(' ');


function App(props) {
    const [language, setLanguage] = useState(' ');

    const initialCart = () => {
        if (localStorage.getItem('cartItems') === null) {
            localStorage.setItem('cartItems', JSON.stringify({}));
            return {};
        } else {
            const initialCartItems = localStorage.getItem('cartItems'); //json
            return JSON.parse(initialCartItems) //получаем объект с картинами
        }
    };


    const [cart, setCart] = useState(initialCart);


    const updateCart = (item) => {
        let actualCart = {...cart, [item.id]: item};
        setCart(actualCart);
        localStorage.setItem('cartItems', JSON.stringify(actualCart));
    };


    const removeFromCart = (item) => {
        let actualCart = {};

        for (let key in cart) {
            if (!(+key === item.id)) {
                actualCart[key] = cart[key];
            }
        }

        setCart(actualCart);
        localStorage.setItem('cartItems', JSON.stringify(actualCart));

    };


    const {history} = props;
    return (
        <I18nProvider i18n={i18n}>
            <ContextLanguage.Provider value={{
                language: language, toggleLanguage: (activeLang) => {
                    setLanguage(activeLang);
                    i18n.activate(activeLang);
                }
            }}>
                <HashRouter>
                    <Switch>
                        <Route history={history} path='/home' render={(props) =>
                            <Home  {...props} cart={cart} removeFromCart={removeFromCart}/>
                        }/>
                        <Route history={history} path='/shop' render={(props) =>
                            <Shop updateCart={updateCart} {...props} cart={cart} removeFromCart={removeFromCart}/>
                        }/>
                        <Redirect from='/' to='/home'/>
                    </Switch>
                </HashRouter>
            </ContextLanguage.Provider>

        </I18nProvider>
    );
}


export default withRouter(App)
