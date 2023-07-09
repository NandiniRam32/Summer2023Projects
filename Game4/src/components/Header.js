import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Header = () => {
    return (
        <div style={{width: "40vw", height: "10vw"}} className="header">
            <big className="header-title">
                Number<br />Islands
            </big>
            <button className="dot" style={{fontFamily: "papyrus, fantasy"}}>
                Light/Dark Mode
            </button>
        </div>
    );
};

export default Header;