import React from 'react';
import '../css/header.css'
import Logo from '../img/Logo.png';
const Header = () => {

    return(
        <div className="header">
            <img src={Logo} className="logo"/>
        </div>
    );

}

export default Header;