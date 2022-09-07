import React from "react";
import "../index.css"
import Logo from "../images/logo.png"

export default function NavMain () {
    return (
        <>
            <nav>
                <img className="nav--logo" src={Logo} />
            </nav>
        </>
    )
}