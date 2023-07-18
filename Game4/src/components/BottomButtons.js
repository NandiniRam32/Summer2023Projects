import React from "react";
import "tailwindcss/tailwind.css";

const BottomButtons = ({ handleChangePage }) => {
    return (
        <div className="bottom-buttons" style={{height: "6vw", display: "flex", justifyContent: "space-between"}}>
            <button className="bButton" onClick={() => handleChangePage('levels')}>
                Levels
            </button>
            <button className="bButton" onClick={() => handleChangePage('rules')}>
                Rules
            </button>
            <button className="bButton" onClick={() => handleChangePage('main')}>
                Main
            </button>
        </div>
    );
};

export default BottomButtons;