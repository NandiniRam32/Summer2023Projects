import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const MainPage = ({ handleChangePage }) => {
  return (
    <div style={{ backgroundImage: "url('https://github.com/NandiniRam32/Summer2023Projects/blob/master/Game4/src/components/IslandDay.jpeg?raw=true')", 
    backgroundSize: "cover"}} className="title">
        <Header />
        <div style={{height: "16vh"}}></div>
        <button style={{height: "30vh", width: "25vw", marginLeft: "37.5vw", fontFamily: "papyrus", 
        fontSize: "6vw"}} className="play-button" onClick={() => handleChangePage('levels')}>Play</button>
        <div style={{height: "16.9vh"}}></div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};