import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png'

const Header = () => {

    const menueItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/faq">Faq</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menueItem}
                    </ul>
                </div>
                <Link to="/" className="w-20">
                    <img className='rounded' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menueItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/Login" className="btn btn-outline btn-warning">Login</a>
                <a href="/register" className="btn btn-outline btn-warning mx-2">Register</a>
            </div>
        </div>
    );
};

export default Header;