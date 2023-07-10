import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const PlayPage = ({ handleChangePage }) => {
  return (
    <div style={{ backgroundImage: "url('https://github.com/NandiniRam32/Summer2023Projects/blob/master/Game4/src/components/IslandDay.jpeg?raw=true')", 
    backgroundSize: "cover"}} className="title">
        <Header />
        <div style={{height: "62.9vh"}}></div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};