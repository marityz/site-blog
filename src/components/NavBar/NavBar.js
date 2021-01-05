import React from 'react';
import {NavLink} from 'react-router-dom';
import "./NavBar.css"
import "../../fonts/font-awesome-4.7.0/css/font-awesome.css"
import { Trans } from '@lingui/macro';
import LanguageSelector from '../LanguageSelector/LanguageSelector'

function NavBar() {
    return (
        <>
        <nav className='navbar'>
            <NavLink exact to="/home" className="navbar__link" activeClassName='navbar__link_active'><Trans>Home</Trans></NavLink>
            <NavLink to="/shop" className="navbar__link" activeClassName='navbar__link_active'><Trans>Shop</Trans></NavLink>
            <NavLink to="/blog" className="navbar__link" activeClassName='navbar__link_active'><Trans>Blog</Trans></NavLink>

        </nav>
            <div className='navbar-shop'>
             <i className = "fa  fa-2x fa-user-circle-o navbar__login"  aria-hidden="true"></i>
             <i className="fa fa-2x fa-shopping-cart navbar__card" aria-hidden="true"></i>

            </div>
            <LanguageSelector/>
</>

    )


}


export default NavBar;

