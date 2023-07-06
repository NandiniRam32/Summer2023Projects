import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import { Login } from './Login';
import { Register } from './Register';

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
    <div className="App" style={{textAlign: "center"}}>
        <form>
          <label for="username">Username</label>
          <input type="username" placeholder="your username" id="username" name="username"/>
          <label for="password">Password</label>
          <input type="password" placeholder="your password" id="password" name="password"/>
        </form>
    </div>
  );
};

export default App;