import React from "react";

export default function FooterLink({ footerlinks, header }) {
    return (
        <>
            <h3>{header}</h3>
            {footerlinks.map((link, index) => (
                <a href='#' key={index}>
                    {link}
                </a>
            ))}
        </>
    );
}
