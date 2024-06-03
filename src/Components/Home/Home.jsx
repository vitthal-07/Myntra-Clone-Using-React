import React from "react";
import { useSelector } from "react-redux";
import HomeItem from "./HomeItem";
export const Home = () => {
    const items = useSelector((store) => store.items);
    return (
        <main>
            <div className='items-container'>
                {items.map((item) => {
                    return <HomeItem key={item.id} item={item} />;
                })}
            </div>
        </main>
    );
};
