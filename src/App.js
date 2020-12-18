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


function App(props) {
    const {history} = props;
    return (
        <BrowserRouter>
            <Switch>
                <Route history={history} path='/home' component={Home}/>
                <Route history={history} path='/shop' component={Shop}/>
                <Redirect from='/' to='/home'/>
            </Switch>
        </BrowserRouter>
    );
}


export default withRouter(App)
