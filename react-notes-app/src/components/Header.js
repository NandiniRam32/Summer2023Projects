import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header only-header-text">
            {/**<div style={{paddingTop: "10px"}}>
                <small className="header-username" style={{marginTop: "100px", color: "#ad03fc"}}>NandiniRam32</small>
    </div>*/}
            <div className="flex justify-between">
                <big className="header-title" style={{marginTop: "0px"}}>Knowledge Archive</big>
                <button onClick={()=> handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)} className="ml-auto tg-btn-bg
                toggle-button inline-block rounded-full py-1 px-2 align-middle mt-10 whitespace-nowrap text-slate-700">
                Light/Dark Mode</button>
            </div>
            <div className='flex justify-end'>
                <button onClick={()=> handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)} className="tg-btn-sm
                    toggle-button text-slate-700">
                    Light/Dark Mode</button>
            </div>
        </div>
    )
};

export default Header;