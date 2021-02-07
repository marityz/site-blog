import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import {createBrowserHistory} from 'history';



const history = createBrowserHistory();

ReactDOM.render((
    <HashRouter history={history}>
        <App/>
    </HashRouter>
), document.getElementById('root'));
