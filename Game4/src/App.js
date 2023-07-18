import React, { useEffect, useState } from 'react';
import { MainPage } from './MainPage';
import { LevelsPage } from './LevelsPage';
import { RulesPage } from './RulesPage';
import { PlayPage } from './PlayPage';
import { WinPage } from './WinPage';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem(key);
    if (storedData === null || storedData === undefined) {
      return defaultValue;
    } else {
      return JSON.parse(storedData);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const App = () => {
  const [page, setPage] = useState('main');

  const changePage = (newPage) => {
    setPage(newPage);
  }

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const [currentLevel, setCurrentLevel] = useLocalStorage('currentLevel', 1);

  const changeCurrentLevel = (currentLevel, playingLevel) => {
    if (currentLevel === playingLevel) {
      setCurrentLevel(currentLevel + 1);
    }
  }

  const [playingLevel, setPlayingLevel] = useLocalStorage('playingLevel', 1);

  const grid = [
      [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 4, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0]],
      [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 3, 2, 1, 0, 0], [0, 0, 0, 2, 1, 0, 0, 0]],
      [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 2, 2, 0, 0], [0, 0, 1, 4, 3, 2, 0, 0], [0, 0, 0, 2, 3, 1, 0, 0]],
      [[0, 0, 0, 0, 2, 1, 0, 0], [0, 0, 0, 2, 4, 2, 0, 0], [0, 0, 0, 2, 4, 3, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0]],
      [[0, 1, 3, 3, 1, 1, 0, 0], [1, 0, 3, 4, 1, 2, 1, 0], [2, 1, 2, 3, 3, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0]],
      [[0, 0, 2, 1, 0, 1, 0, 0], [0, 0, 3, 2, 0, 1, 0, 0], [0, 1, 4, 3, 2, 1, 0, 0], [0, 1, 2, 0, 0, 0, 0, 0]],
      [[0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 2, 3, 3, 1, 0, 0], [0, 0, 0, 2, 3, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0]],
      [[1, 2, 1, 0, 1, 2, 1, 0], [1, 0, 1, 0, 0, 0, 0, 1], [2, 0, 2, 0, 2, 1, 1, 1], [1, 0, 1, 0, 1, 1, 2, 0]],
      [[0, 1, 1, 0, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0, 1, 0], [0, 1, 0, 0, 1, 1, 1, 0], [0, 0, 1, 1, 0, 1, 1, 0]],
      [[0, 0, 1, 2, 3, 2, 0, 0], [0, 0, 0, 1, 2, 2, 0, 0], [0, 1, 2, 3, 2, 0, 0, 0], [1, 1, 0, 0, 2, 1, 0, 0]],
      [[0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 0, 1, 1, 1, 2], [1, 2, 1, 2, 1, 1, 2, 1], [2, 2, 1, 1, 1, 1, 2, 1]],
      [[2, 1, 1, 1, 1, 2, 1, 1], [1, 1, 3, 1, 0, 2, 2, 3], [2, 0, 2, 1, 1, 3, 2, 2], [2, 1, 1, 1, 0, 1, 2, 1]],
      [[1, 1, 2, 1, 1, 2, 2, 1], [2, 2, 3, 2, 1, 2, 2, 1], [2, 2, 1, 1, 1, 3, 2, 1], [1, 2, 2, 2, 1, 2, 2, 1]],
      [[2, 2, 2, 1, 2, 2, 1, 1], [2, 1, 1, 2, 2, 3, 2, 2], [1, 2, 2, 3, 1, 2, 2, 1], [1, 2, 1, 1, 2, 2, 1, 1]],
      [[2, 1, 0, 1, 1, 0, 1, 2], [1, 2, 3, 2, 1, 3, 2, 1], [2, 3, 2, 2, 1, 1, 3, 2], [1, 2, 2, 0, 1, 1, 2, 1]]
  ];

  const gridAnswers = [
    [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 0, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0]],
    [[0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
    [[0, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 1, 0, 1, 0], [1, 0, 1, 1, 0, 0, 0, 0], [1, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
    [[0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0], [0, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0]],
    [[1, 1, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 1, 0, 1, 0], [0, 0, 0, 0, 0, 1, 0]],
    [[0, 1, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 1, 0]],
    [[0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0], [1, 0, 0, 0, 1, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 0, 1], [0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 1, 1, 0, 1, 0], [1, 1, 0, 0, 0, 0, 1, 0], [1, 0, 1, 0, 1, 0, 1]],
    [[1, 0, 1, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1], [0, 1, 1, 0, 0, 1, 1], [1, 0, 1, 0, 0, 1, 0, 1], [0, 0, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 0, 0, 1]],
    [[0, 1, 1, 0, 1, 0, 1], [1, 0, 0, 0, 0, 1, 1, 0], [1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 0, 0, 1, 1, 1], [1, 0, 0, 0, 0, 1, 0], [1, 1, 0, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 1, 1]],
    [[1, 1, 1, 0, 1, 0, 0], [1, 0, 0, 0, 1, 1, 1, 1], [0, 0, 1, 0, 1, 1, 0], [1, 1, 0, 1, 0, 0, 0, 1], [0, 1, 1, 1, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [1, 1, 0, 1, 1, 0, 0]],
    [[1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 1], [0, 1, 1, 0, 1, 1, 0], [0, 1, 1, 1, 0, 1, 1, 1], [1, 0, 0, 1, 0, 0, 1], [1, 1, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 1, 0, 1]],
    [[1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1]]
  ];

  if (page === 'main') {
    return (
      <div className={`${darkMode && 'dark-mode'}`}>
        <MainPage handleChangePage={changePage} handleDarkMode={setDarkMode}/>
      </div>
    );
  } else if (page === 'levels') {
    return (
      <div className={`${darkMode && 'dark-mode'}`}>
        <LevelsPage handleChangePage={changePage} handleDarkMode={setDarkMode} currentLevel={currentLevel} setPlayingLevel={setPlayingLevel}/>
      </div>
    );
  } else if (page === 'rules') {
    return (
      <div className={`${darkMode && 'dark-mode'}`}>
        <RulesPage handleChangePage={changePage} handleDarkMode={setDarkMode}/>
      </div>
    );
  } else if (page === 'play') {
    return (
      <div className={`${darkMode && 'dark-mode'}`}>
        <PlayPage handleChangePage={changePage} handleDarkMode={setDarkMode} grid={grid} currentLevel={currentLevel} playingLevel={playingLevel} gridAnswers={gridAnswers} changeCurrentLevel={changeCurrentLevel}/>
      </div>
    );
  } else if (page === 'win') {
    return (
      <div className={`${darkMode && 'dark-mode'}`}>
        <WinPage handleChangePage={changePage} handleDarkMode={setDarkMode} changeCurrentLevel={changeCurrentLevel} currentLevel={currentLevel} playingLevel={playingLevel} setPlayingLevel={setPlayingLevel}/>
      </div>
    );
  }
};

export default App;