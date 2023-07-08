import { useEffect, useState } from 'react';
import { MainPage } from './MainPage';
import Header from "./components/Header";

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
  return (
    <div>
      <MainPage />
    </div>
  );
};

export default App;