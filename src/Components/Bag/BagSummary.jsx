import React from "react";
import { useSelector } from "react-redux";

export default function BagSummary() {
    const bag = useSelector((store) => store.bag);
    const items = useSelector((store) => store.items);
    const itemList = items.filter((item) => bag.includes(item.id));
    const CONVENIENCE_FEES = 99;
    const totalItem = bag.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    console.log(itemList);

    itemList.forEach((bagItem) => {
        totalMRP += bagItem.original_price;
        totalDiscount = bagItem.original_price - bagItem.current_price;
    });
    const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
    return (
        <div className='bag-summary'>
            <div className='bag-details-container'>
                <div className='price-header'>
                    PRICE DETAILS {totalItem} Items
                </div>
                <div className='price-item'>
                    <span className='price-item-tag'>Total MRP</span>
                    <span className='price-item-value'>₹{totalMRP}</span>
                </div>
                <div className='price-item'>
                    <span className='price-item-tag'>Discount on MRP</span>
                    <span className='price-item-value priceDetail-base-discount'>
                        -₹{totalDiscount}
                    </span>
                </div>
                <div className='price-item'>
                    <span className='price-item-tag'>Convenience Fee</span>
                    <span className='price-item-value'>₹99</span>
                </div>
                <hr />
                <div className='price-footer'>
                    <span className='price-item-tag'>Total Amount</span>
                    <span className='price-item-value'>₹{finalPayment}</span>
                </div>
            </div>
            <button className='btn-place-order'>
                <div className='css-xjhrni'>PLACE ORDER</div>
            </button>
        </div>
    );
}
