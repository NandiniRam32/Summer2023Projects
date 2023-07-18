import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const MainPage = ({ handleChangePage, handleDarkMode }) => {
  return (
    <div className="title">
        <Header handleChangePage={handleChangePage} handleDarkMode={handleDarkMode}/>
        <div style={{height: "16vh"}}></div>
        <div style={{height: "30vh", width: "25vw", marginLeft: "37.5vw", fontFamily: "papyrus", 
        fontSize: "6vw"}} className="play-button" onClick={() => handleChangePage('levels')}>Play</div>
        <div style={{height: "4.9vh"}}></div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};