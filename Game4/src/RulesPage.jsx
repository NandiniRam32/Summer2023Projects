import React from "react";
import Header from "./components/Header";
import BottomButtons from "./components/BottomButtons";

export const RulesPage = ({ handleChangePage }) => {
  return (
    <div style={{ backgroundImage: "url('https://github.com/NandiniRam32/Summer2023Projects/blob/master/Game4/src/components/IslandDay.jpeg?raw=true')", 
    backgroundSize: "cover"}} className="title">
        <div style={{height: "30.8vh", display: "flex", justifyContent: "space-between"}}>
            <Header  />
            <span className="rules-box">
            <div style={{fontFamily: "Lucida Handwriting", fontSize: "10vh",
            textDecoration: "underline", paddingBottom: "6vh", fontWeight: "bold"}}>Rules</div>
            <div>You are given a grid of numbers, and have to draw the amount of bridges from one number 
            to another corresponding to the number in the center.<br/><br/>You can only finish a level when all of your bridges 
            have been drawn properly. Remember to press the submit button!</div></span>
        </div>
        <div className="rules-box" style={{height: "44.7vh"}}>
            <div>Here's an example:</div>
            <img></img>
            <div>Good luck!</div>
        </div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};