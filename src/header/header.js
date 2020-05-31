import React from "react";
import Navbar from './navbar';

const navBar = [
    { name: 'home', url: '/' },
    { name: 'products', url: '/products'},
    { name: 'about', url: '/about' }
];

function header(props) {
    return <div id="header">
        <Navbar items={navBar} />
    </div>;
}


export default header;