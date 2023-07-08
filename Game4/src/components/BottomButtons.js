import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Header = () => {
    return (
        <div className="bottom-buttons">
            <button className="bButton">
                MainPage
            </button>
            <button className="bButton">
                Levels
            </button>
            <button className="bButton">
                MainPage
            </button>
        </div>
    );
};

export default Header;