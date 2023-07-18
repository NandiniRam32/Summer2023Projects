import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const WinPage = ({ handleChangePage, handleDarkMode, changeCurrentLevel, currentLevel, playingLevel, setPlayingLevel }) => {
  return (
    <div className="title">
        <div style={{height: "30.8vh", display: "flex", justifyContent: "space-between"}}>
            <Header handleChangePage={handleChangePage} handleDarkMode={handleDarkMode}/>
        </div>
        <div className="win-box">
            <div style={{marginBottom: "12vh", color: "transparent"}}>Congratulations!</div>
            <div className="win-inside-box" style={{textDecoration: "underline", fontSize: "4vw", fontFamily: "papyrus", width: "20vw", marginLeft: "0vw"}} 
            onClick={() => {setPlayingLevel(playingLevel + 1); handleChangePage('play')}}>Next</div>
        </div>
        <div style={{height: "5vh"}}></div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};