import React from "react";
import "tailwindcss/tailwind.css";

const Header = ({ handleDarkMode }) => {
    return (
        <div className="header">
            <big className="header-title">
                Number<br />Islands
            </big>
            <button className="dot" style={{fontFamily: "papyrus, fantasy"}} onClick={()=> handleDarkMode((previousDarkMode)=> 
                !previousDarkMode)}>
                Light/Dark Mode
            </button>
        </div>
    );
};

export default Header;