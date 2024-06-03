import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "./Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "./Components/LoadingSpinner";
export default function App() {
    const { currentlyFetching } = useSelector((store) => store.fetchStatus);
    return (
        <>
            <Header />
            <FetchItems />
            {currentlyFetching ? <LoadingSpinner /> : <Outlet />}
            <Footer />
        </>
    );
}
