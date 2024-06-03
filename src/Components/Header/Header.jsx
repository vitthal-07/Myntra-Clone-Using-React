import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import ActionBar from "./ActionBar";

export default function Header() {
    return (
        <header>
            <Navbar />
            <SearchBar />
            <ActionBar />
        </header>
    );
}
