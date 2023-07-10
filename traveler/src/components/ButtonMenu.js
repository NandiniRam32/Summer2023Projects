import React, { useState } from "react";
//import "tailwindcss/tailwind.css";

const ButtonMenu = ({ handleChangePge }) => {
    return(
        <div className='game-button' style = {{height: '30px'}}>
            <button className='menu-button' onClick={() => handleChangePage('main')}>
                Menu
            </button>

            <button className='game-button' onClick={() => handleChangePage('rules')}>

            </button>
        </div>
    )
}
