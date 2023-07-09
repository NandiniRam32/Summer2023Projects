import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const LevelsPage = ({ handleChangePage }) => {
  return (
    <div style={{ backgroundImage: "url('https://github.com/NandiniRam32/Nandini-Ramakrishnan-Website/blob/main/ArtButton.jpg?raw=true')", 
    backgroundSize: "cover"}} className="title">
        <Header />
        <div style={{height: "62.9vh"}}></div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};