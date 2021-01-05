import './App.css';
import React from 'react';


import {
    Route,
    Redirect,
    BrowserRouter,
    withRouter,
    Switch,
} from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Shop from '../src/pages/Shop/Shop'

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages } from './locales/ru/messages.js'

i18n.load('ru', messages);
i18n.activate('en');


function App(props) {
    const {history} = props;
    return (
        <I18nProvider i18n={i18n}>
        <BrowserRouter>
            <Switch>
                <Route history={history} path='/home' component={Home}/>
                <Route history={history} path='/shop' component={Shop}/>
                <Redirect from='/' to='/home'/>
            </Switch>
        </BrowserRouter>
        </I18nProvider>
    );
}


export default withRouter(App)
