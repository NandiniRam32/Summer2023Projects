import React from "react";
import Popup from 'reactjs-popup';
import "../index.css";

const RulePopup = () => {  
    return (
        <Popup
            trigger={<button className='menu-button'> Controls </button>}
            modal 
            nested     
        >
            {close => (
                <div style={{ backgroundColor: "blanchedalmond", borderStyle: "dotted", 
                    bordercolor: "darkgoldenrod", borderRadius: "7px" }}>
                    <button className='close' onClick={close}>
                        x
                    </button>
                    <div style={{textAlign: "center", padding: "10px", 
                        fontSize: "20px", justifyContent: "center", fontWeight: "500",
                        paddingTop: "25px" }}>
                        Controls
                    </div>
                    <div style={{ textAlign: "center", paddingBottom: "25px", paddingTop: "10px",
                        paddingLeft: "25px", paddingRight: "25px" }}>
                        {' '}
                        Hello! Welcome to Traveler. The goal of this game is to survive as
                        <br />
                        long as you can by selecting prompt options. ^.^
                        <br />
                        <br />
                        You will be given questions and 2 options. Press 'A' for the option 
                        <br />
                        on the left and press 'D' for the option on the left.
                        <br />
                        <br />
                        Have funnn!!!
                    </div>
                </div>
            )}
        
        </Popup>

    ); 
};

export default RulePopup;