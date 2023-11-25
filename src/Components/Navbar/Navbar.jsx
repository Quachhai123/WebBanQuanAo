import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className='navbar-logo'>
                <img src={logo} alt=''/>
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => {setMenu("shops")}}>Shop {menu==="shops" ? <hr/>:<></>}</li>
                <li onClick={() => {setMenu("mens")}}>Mem {menu==="mens" ? <hr/>:<></>}</li>
                <li onClick={() => {setMenu("womens")}}>Women {menu==="womens" ? <hr/>:<></>}</li>
                <li onClick={() => {setMenu("kids")}}>Kids {menu==="kids" ? <hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt=''/>
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar