import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../../Store/BagSlice";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default function HomeItem({ item }) {
    const bag = useSelector((store) => store.bag);
    const dispatch = useDispatch();
    const addToBag = (id) => {
        dispatch(bagAction.addToBag(id));
    };
    const removeFromBag = (id) => {
        dispatch(bagAction.removeFromBag(id));
    };
    return (
        <div className='item-container'>
            <img className='item-image' src={item.image} alt='item image' />
            <div className='rating'>
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className='company-name'>{item.company}</div>
            <div className='item-name'>{item.item_name}</div>
            <div className='price'>
                <span className='current-price'>Rs {item.current_price}</span>
                <span className='original-price'>Rs {item.original_price}</span>
                <span className='discount'>
                    ({item.discount_percentage}% OFF)
                </span>
            </div>
            {!bag.includes(item.id) ? (
                <button
                    type='button'
                    className=' btn-add-bag btn btn-success'
                    onClick={() => addToBag(item.id)}
                >
                    <IoMdAdd /> Add to Bag
                </button>
            ) : (
                <button
                    type='button'
                    className='btn btn-add-bag btn-danger'
                    onClick={() => removeFromBag(item.id)}
                >
                    <MdDelete />
                    Remove
                </button>
            )}
        </div>
    );
}
