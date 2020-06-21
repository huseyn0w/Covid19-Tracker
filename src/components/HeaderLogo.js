import React from 'react';
import logo from '../logo.jpg';

export function HeaderLogo (props) {
    return (
        <div>
            <img className="logo-image" src={logo} alt="Logo" />
        </div>
    );
}
