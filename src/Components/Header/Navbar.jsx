import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className='logo_container'>
                <Link to='/'>
                    <img
                        className='myntra_home'
                        src='../images/myntra_logo.webp'
                        alt='Myntra Home'
                    />
                </Link>
            </div>
            <nav className='nav_bar'>
                <a href='#'>Men</a>
                <a href='#'>Women</a>
                <a href='#'>Kids</a>
                <a href='#'>Home & Living</a>
                <a href='#'>Beauty</a>
                <a href='#'>
                    Studio <sup>New</sup>
                </a>
            </nav>
        </>
    );
}
