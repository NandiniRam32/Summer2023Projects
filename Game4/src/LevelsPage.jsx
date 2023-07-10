import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const LevelsPage = ({ handleChangePage }) => {
  return (
    <div style={{ backgroundImage: "url('https://github.com/NandiniRam32/Summer2023Projects/blob/master/Game4/src/components/IslandDay.jpeg?raw=true')", 
    backgroundSize: "cover"}} className="title">
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <Header />
        </div>
        <div style={{display: "flex", marginLeft: "0vw", marginTop: "10vh"}}>
            <span className="level-button" style={{marginLeft: "10vw"}} onClick={() => handleChangePage('play')}>1</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>2</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>3</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>4</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>5</span>
        </div>
        <div style={{display: "flex", marginLeft: "7vw", marginTop: "2vh"}}>
            <span className="level-button" onClick={() => handleChangePage('page')}>6</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>7</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>8</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>9</span>
        </div>
        <div style={{height: "19.7vh", display: "flex", marginTop: "2vh"}}>
            <span className="level-button" style={{marginLeft: "10vw"}} onClick={() => handleChangePage('page')}>10</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>11</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>12</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>13</span>
            <span className="level-button" onClick={() => handleChangePage('page')}>14</span>
        </div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};