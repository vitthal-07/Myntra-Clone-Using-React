import React, { useState, useEffect } from "react";
import FooterLink from "./FooterLink";

export default function Footer() {
    const headers = [
        "ONLINE SHOPPING",
        "CUSTOMER POLICIES",
        "ONLINE SHOPPING",
        "CUSTOMER POLICIES",
    ];
    const footerLinks = [
        [
            "Men",
            "Women",
            "Kids",
            "Home & Living",
            "Beauty",
            "Gift Card",
            "Myntra Insider",
        ],
        [
            "Contact Us",
            "FAQ",
            "T&C",
            "Terms Of Use",
            "Track Orders",
            "Shipping",
            "Cancellation",
            "Returns",
            "Privacy policy",
            "Grievance Officer",
        ],
        [
            "Men",
            "Women",
            "Kids",
            "Home & Living",
            "Beauty",
            "Gift Card",
            "Myntra Insider",
        ],
        [
            "Contact Us",
            "FAQ",
            "T&C",
            "Terms Of Use",
            "Track Orders",
            "Shipping",
            "Cancellation",
            "Returns",
            "Privacy policy",
            "Grievance Officer",
        ],
    ];

    return (
        <footer>
            <div className='footer_container'>
                {footerLinks.map((linksArray, index) => (
                    <div className='footer_column' key={index}>
                        <FooterLink
                            footerlinks={linksArray}
                            header={headers[index]}
                        />
                    </div>
                ))}
            </div>
            <div className='copyright'>
                © 2024 www.myntra.com. All rights reserved.
            </div>
        </footer>
    );
}
