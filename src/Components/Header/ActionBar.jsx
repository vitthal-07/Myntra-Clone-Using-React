import { FaGrinHearts } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBag } from "react-icons/io5";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ActionBar() {
    const bag = useSelector((store) => store.bag);
    return (
        <div className='action_bar'>
            <Link className='action_container' to='/profile'>
                <BsFillPersonFill />
                <span className='action_name'>Profile</span>
            </Link>

            <Link className='action_container' to='/wishlist'>
                <FaGrinHearts />
                <span className='action_name'>Wishlist</span>
            </Link>

            <Link className='action_container' to='/bag'>
                <IoBag />
                <span className='action_name'>Bag</span>
                <span className='bag-item-count'>{bag.length}</span>
            </Link>
        </div>
    );
}
