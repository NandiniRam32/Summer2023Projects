import { useEffect, useState } from 'react';
import { MainMenu } from './MainMenu';
import { GameOver } from './GameOver.jsx';
import { GamePlay } from './GamePlay.jsx';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
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

  if (page === 'main') {
    return (
      <div>
        <MainMenu handleChangePage={changePage}/>
      </div>
    );
  } else if (page === 'game') {
    return(
      <div>
        <GamePlay handleChangePage={changePage}/>
      </div>
    );
  } else if (page === 'badend') {
    return (
      <div>
        <GameOver handleChangePage={changePage}/>
      </div>
    )
  }
};

export default App;