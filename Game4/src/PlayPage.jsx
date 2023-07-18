import React, { useState } from "react";
import BottomButtons from "./components/BottomButtons";

export const PlayPage = ({ handleChangePage, handleDarkMode, grid, currentLevel, playingLevel, gridAnswers, changeCurrentLevel }) => {
  const [currentGrid, setCurrentGrid] = useState(gridAnswers[15]);

  let handleBridge = (a, b) => {
    const updatedGrid = [...currentGrid];
    if (currentGrid[a][b] === 1) {
        currentGrid[a][b] = 0;
    } else {
        currentGrid[a][b] = 1;
    }
    setCurrentGrid(updatedGrid);
    if (JSON.stringify(currentGrid) === JSON.stringify(gridAnswers[playingLevel])) {
        changeCurrentLevel(currentLevel, playingLevel);
        handleChangePage('win');
    }
  }

  return (
    <div className="title">
        <button className="dot" style={{fontFamily: "papyrus", marginLeft: "0.5vw", marginTop: "1vh"}} onClick={()=> handleDarkMode((previousDarkMode)=> 
            !previousDarkMode)}>
            Light/Dark Mode
        </button>
        <div style={{height: "60.9vh"}}>
            <div style={{display: "flex", justifyContent: "flex-start", marginLeft: "12vw"}}>
                <div className="diamond"><br/>{grid[playingLevel][0][0]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[0][0]}} onClick={() => handleBridge(0, 0)}></div>
                <div className="diamond"><br/>{grid[playingLevel][0][1]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[0][1]}} onClick={() => handleBridge(0, 1)}></div>
                <div className="diamond"><br/>{grid[playingLevel][0][2]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[0][2]}} onClick={() => handleBridge(0, 2)}></div>
                <div className="diamond"><br/>{grid[playingLevel][0][3]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[0][3]}} onClick={() => handleBridge(0, 3)}></div>
                <div className="diamond"><br/>{grid[playingLevel][0][4]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[0][4]}} onClick={() => handleBridge(0, 4)}></div>
                <div className="diamond"><br/>{grid[playingLevel][0][5]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[0][5]}} onClick={() => handleBridge(0, 5)}></div>
                <div className="diamond"><br/>{grid[playingLevel][0][6]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[0][6]}} onClick={() => handleBridge(0, 6)}></div>
                <div className="diamond"><br/>{grid[playingLevel][0][7]}</div>
            </div>
            <div style={{ height: "3vh", display: "flex", justifyContent: "flex-start", marginLeft: "8vw", gap: "2.1vw" }}>
                <div className="bridge" style={{opacity: currentGrid[1][0]}} onClick={() => handleBridge(1, 0)}></div>
                <div className="bridge" style={{opacity: currentGrid[1][1]}} onClick={() => handleBridge(1, 1)}></div>
                <div className="bridge" style={{opacity: currentGrid[1][2]}} onClick={() => handleBridge(1, 2)}></div>
                <div className="bridge" style={{opacity: currentGrid[1][3]}} onClick={() => handleBridge(1, 3)}></div>
                <div className="bridge" style={{opacity: currentGrid[1][4]}} onClick={() => handleBridge(1, 4)}></div>
                <div className="bridge" style={{opacity: currentGrid[1][5]}} onClick={() => handleBridge(1, 5)}></div>
                <div className="bridge" style={{opacity: currentGrid[1][6]}} onClick={() => handleBridge(1, 6)}></div>
                <div className="bridge" style={{opacity: currentGrid[1][7]}} onClick={() => handleBridge(1, 7)}></div>
            </div>
            <div style={{display: "flex", justifyContent: "flex-start", marginLeft: "12vw"}}>
                <div className="diamond"><br/>{grid[playingLevel][1][0]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[2][0]}} onClick={() => handleBridge(2, 0)}></div>
                <div className="diamond"><br/>{grid[playingLevel][1][1]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[2][1]}} onClick={() => handleBridge(2, 1)}></div>
                <div className="diamond"><br/>{grid[playingLevel][1][2]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[2][2]}} onClick={() => handleBridge(2, 2)}></div>
                <div className="diamond"><br/>{grid[playingLevel][1][3]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[2][3]}} onClick={() => handleBridge(2, 3)}></div>
                <div className="diamond"><br/>{grid[playingLevel][1][4]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[2][4]}} onClick={() => handleBridge(2, 4)}></div>
                <div className="diamond"><br/>{grid[playingLevel][1][5]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[2][5]}} onClick={() => handleBridge(2, 5)}></div>
                <div className="diamond"><br/>{grid[playingLevel][1][6]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[2][6]}} onClick={() => handleBridge(2, 6)}></div>
                <div className="diamond"><br/>{grid[playingLevel][1][7]}</div>
            </div>
            <div style={{ height: "3vh", display: "flex", justifyContent: "flex-start", marginLeft: "8vw", gap: "2.1vw" }}>
                <div className="bridge" style={{opacity: currentGrid[3][0]}} onClick={() => handleBridge(3, 0)}></div>
                <div className="bridge" style={{opacity: currentGrid[3][1]}} onClick={() => handleBridge(3, 1)}></div>
                <div className="bridge" style={{opacity: currentGrid[3][2]}} onClick={() => handleBridge(3, 2)}></div>
                <div className="bridge" style={{opacity: currentGrid[3][3]}} onClick={() => handleBridge(3, 3)}></div>
                <div className="bridge" style={{opacity: currentGrid[3][4]}} onClick={() => handleBridge(3, 4)}></div>
                <div className="bridge" style={{opacity: currentGrid[3][5]}} onClick={() => handleBridge(3, 5)}></div>
                <div className="bridge" style={{opacity: currentGrid[3][6]}} onClick={() => handleBridge(3, 6)}></div>
                <div className="bridge" style={{opacity: currentGrid[3][7]}} onClick={() => handleBridge(3, 7)}></div>
            </div>
            <div style={{display: "flex", justifyContent: "flex-start", marginLeft: "12vw"}}>
                <div className="diamond"><br/>{grid[playingLevel][2][0]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[4][0]}} onClick={() => handleBridge(4, 0)}></div>
                <div className="diamond"><br/>{grid[playingLevel][2][1]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[4][1]}} onClick={() => handleBridge(4, 1)}></div>
                <div className="diamond"><br/>{grid[playingLevel][2][2]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[4][2]}} onClick={() => handleBridge(4, 2)}></div>
                <div className="diamond"><br/>{grid[playingLevel][2][3]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[4][3]}} onClick={() => handleBridge(4, 3)}></div>
                <div className="diamond"><br/>{grid[playingLevel][2][4]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[4][4]}} onClick={() => handleBridge(4, 4)}></div>
                <div className="diamond"><br/>{grid[playingLevel][2][5]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[4][5]}} onClick={() => handleBridge(4, 5)}></div>
                <div className="diamond"><br/>{grid[playingLevel][2][6]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[4][6]}} onClick={() => handleBridge(4, 6)}></div>
                <div className="diamond"><br/>{grid[playingLevel][2][7]}</div>
            </div>
            <div style={{ height: "3vh", display: "flex", justifyContent: "flex-start", marginLeft: "8vw", gap: "2.1vw" }}>
                <div className="bridge" style={{opacity: currentGrid[5][0]}} onClick={() => handleBridge(5, 0)}></div>
                <div className="bridge" style={{opacity: currentGrid[5][1]}} onClick={() => handleBridge(5, 1)}></div>
                <div className="bridge" style={{opacity: currentGrid[5][2]}} onClick={() => handleBridge(5, 2)}></div>
                <div className="bridge" style={{opacity: currentGrid[5][3]}} onClick={() => handleBridge(5, 3)}></div>
                <div className="bridge" style={{opacity: currentGrid[5][4]}} onClick={() => handleBridge(5, 4)}></div>
                <div className="bridge" style={{opacity: currentGrid[5][5]}} onClick={() => handleBridge(5, 5)}></div>
                <div className="bridge" style={{opacity: currentGrid[5][6]}} onClick={() => handleBridge(5, 6)}></div>
                <div className="bridge" style={{opacity: currentGrid[5][7]}} onClick={() => handleBridge(5, 7)}></div>
            </div>
            <div style={{display: "flex", justifyContent: "flex-start", marginLeft: "12vw"}}>
                <div className="diamond"><br/>{grid[playingLevel][3][0]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[6][0]}} onClick={() => handleBridge(6, 0)}></div>
                <div className="diamond"><br/>{grid[playingLevel][3][1]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[6][1]}} onClick={() => handleBridge(6, 1)}></div>
                <div className="diamond"><br/>{grid[playingLevel][3][2]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[6][2]}} onClick={() => handleBridge(6, 2)}></div>
                <div className="diamond"><br/>{grid[playingLevel][3][3]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[6][3]}} onClick={() => handleBridge(6, 3)}></div>
                <div className="diamond"><br/>{grid[playingLevel][3][4]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[6][4]}} onClick={() => handleBridge(6, 4)}></div>
                <div className="diamond"><br/>{grid[playingLevel][3][5]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[6][5]}} onClick={() => handleBridge(6, 5)}></div>
                <div className="diamond"><br/>{grid[playingLevel][3][6]}</div>
                    <div className="bridge-horizontal" style={{opacity: currentGrid[6][6]}} onClick={() => handleBridge(6, 6)}></div>
                <div className="diamond"><br/>{grid[playingLevel][3][7]}</div>
            </div>
        </div>
        <div style={{height: "5.2vh"}}></div>
        <BottomButtons handleChangePage={handleChangePage}/>
        <div style={{height: "12vh"}}></div>
    </div>
  );
};