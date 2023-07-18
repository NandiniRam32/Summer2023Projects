import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const LevelsPage = ({ handleChangePage, handleDarkMode, currentLevel, setPlayingLevel }) => {
  return (
    <div className="title">
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <Header handleChangePage={handleChangePage} handleDarkMode={handleDarkMode}/>
        </div>
        <div style={{display: "flex", marginLeft: "0vw", marginTop: "8vh"}}>
            <span className="level-button" style={{marginLeft: "10vw"}} onClick={() => {handleChangePage('play'); setPlayingLevel(1);}}>1</span>
            <span className={`level-button ${2 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(2);}}>2</span>
            <span className={`level-button ${3 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(3);}}>3</span>
            <span className={`level-button ${4 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(4);}}>4</span>
            <span className={`level-button ${5 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(5);}}>5</span>
        </div>
        <div style={{display: "flex", marginLeft: "7vw", marginTop: "2vh"}}>
            <span className={`level-button ${6 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(6);}}>6</span>
            <span className={`level-button ${7 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(7);}}>7</span>
            <span className={`level-button ${8 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(8);}}>8</span>
            <span className={`level-button ${9 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(9);}}>9</span>
        </div>
        <div style={{height: "19.7vh", display: "flex", marginTop: "2vh"}}>
            <span className={`level-button ${10 > currentLevel ? 'level-button-not-reached' : ''}`} style={{marginLeft: "10vw"}} onClick={() => {handleChangePage('play'); setPlayingLevel(10);}}>10</span>
            <span className={`level-button ${11 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(11);}}>11</span>
            <span className={`level-button ${12 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(12);}}>12</span>
            <span className={`level-button ${13 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(13);}}>13</span>
            <span className={`level-button ${14 > currentLevel ? 'level-button-not-reached' : ''}`} onClick={() => {handleChangePage('play'); setPlayingLevel(14);}}>14</span>
        </div>
        <div style={{height: "2vh"}}></div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};