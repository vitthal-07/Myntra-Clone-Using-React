import React from "react";
import BagSummary from "./BagSummary";
import BagItems from "./BagItems";

export default function Bag() {
    return (
        <div>
            <main>
                <div className='bag-page'>
                    <BagItems />
                    <BagSummary />
                </div>
            </main>
        </div>
    );
}
