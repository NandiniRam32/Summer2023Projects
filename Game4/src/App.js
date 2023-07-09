import { useEffect, useState } from 'react';
import { MainPage } from './MainPage';
import { LevelsPage } from './LevelsPage';
import { RulesPage } from './RulesPage';

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
        <MainPage handleChangePage={changePage}/>
      </div>
    );
  } else if (page === 'levels') {
    return (
      <div>
        <LevelsPage handleChangePage={changePage}/>
      </div>
    );
  } else if (page === 'rules') {
    return (
      <div>
        <RulesPage handleChangePage={changePage}/>
      </div>
    );
  }
};

export default App;