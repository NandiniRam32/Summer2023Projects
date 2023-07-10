import React, { useState } from "react";
import './index.css';

export const GameOver = ({ handleChangePage }) => {

    return (
        <>
            <h1 className='header' style={{backgroundColor: "black", color: "blanchedalmond"}}>
                GAME OVER
            </h1>
            <div style={{ display: 'flex', justifyContent:'center'}}>
                <button className="menu-button"
                    onClick={() => handleChangePage('main')}
                >
                    Play Again
                </button>
            </div>
        </>
    )
}