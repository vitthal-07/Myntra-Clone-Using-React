import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../../Store/BagSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function BagItems() {
    const bag = useSelector((store) => store.bag);
    const items = useSelector((store) => store.items);
    const itemList = items.filter((item) => bag.includes(item.id));
    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(bagAction.removeFromBag(id));
    };
    return (
        <div className='bag-items-container'>
            {itemList.map((item, index) => (
                <div key={item.id} className='bag-item-container'>
                    <div className='item-left-part'>
                        <img
                            className='bag-item-img'
                            src={item.image}
                            alt={item.item_name}
                        />
                    </div>
                    <div className='item-right-part'>
                        <div className='company'>{item.company}</div>
                        <div className='item-name'>{item.item_name}</div>
                        <div className='price-container'>
                            <span className='current-price'>
                                Rs {item.current_price}
                            </span>
                            <span className='original-price'>
                                Rs {item.original_price}
                            </span>
                            <span className='discount-percentage'>
                                {item.discount_percentage}% OFF
                            </span>
                        </div>
                        <div className='return-period'>
                            <span className='return-period-days'>
                                {item.return_period} days
                            </span>{" "}
                            return available
                        </div>
                        <div className='delivery-details'>
                            Delivery by{" "}
                            <span className='delivery-details-days'>
                                {item.delivery_date}
                            </span>
                        </div>
                    </div>
                    <div
                        className='remove-from-cart'
                        onClick={() => {
                            handleRemoveItem(item.id);
                        }}
                    >
                        <RiDeleteBin6Fill />
                    </div>
                </div>
            ))}
        </div>
    );
}
