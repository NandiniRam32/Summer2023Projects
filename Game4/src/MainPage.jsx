import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const MainPage = () => {
  return (
    <div style={{ backgroundImage: "url('https://github.com/NandiniRam32/Nandini-Ramakrishnan-Website/blob/main/ArtButton.jpg?raw=true')", 
    width: "98%"}} className="title">
        <Header />
        <div style={{height: "2vw"}}></div>
        <BottomButtons />
        <div style={{height: "2vw"}}>Hi</div>
    </div>
  );
};