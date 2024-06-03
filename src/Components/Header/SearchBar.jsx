import { FaSearch } from "react-icons/fa";
import React from "react";

export default function SearchBar() {
    return (
        <>
            <div className='search_bar'>
                <FaSearch className='search_icon' />
                <input
                    className='search_input'
                    placeholder='Search for products, brands and more'
                />
            </div>
        </>
    );
}
