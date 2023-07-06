import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Note",
      text: "Note 1 text starts here",
      date: "00/00/0000",
      background: "#daa2fc",
    },
    {
      id: nanoid(),
      title: "Note 2",
      text: "Note 2 text starts here",
      date: "00/00/0000",
      background: "#83f7bb",
    },
    {
      id: nanoid(),
      title: "Note 3",
      text: "Note 3 text starts here",
      date: "00/00/0000",
      background: "#faa2fa",
    },
    {
      id: nanoid(),
      title: "Note 4",
      text: "Note 4 text starts here",
      date: "00/00/0000",
      background: "#87dcff",
    }]);

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
      if (savedNotes) {
        setNotes(savedNotes);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('react-notes-data',
      JSON.stringify(notes));
    }, [notes]);

    const addNote = (text, title) => {
      const date = new Date();
      let tempBackground = "#87dcff";  //blue
      if (notes.length % 5 === 1) {  //purple
        tempBackground = "#daa2fc";
      } else if (notes.length % 5 === 2) {  //green
        tempBackground = "#83f7bb";
      } else if (notes.length % 5 === 3) {  //pink
        tempBackground = "#faa2fa";
      } else if (notes.length % 5 === 4) {  //magenta
        tempBackground = "#fc58ef";
      }
      const newNote = {
        id: nanoid(),
        title: title,
        text: text,
        date: date.toLocaleDateString(),
        background: tempBackground
      }
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
    }

    const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }

  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <div className={`container divide-y ${darkMode ? 'divide-white' : 'divide-black'}`}>
          <Header handleToggleDarkMode={setDarkMode}/>
          <div>
            <div style={{height: "0.2em"}}/>
            <SearchBar handleSearchNote={setSearchText}/>
            <NotesList notes={notes.filter((note)=> (note.text.toLowerCase().includes(searchText.toLowerCase()) ||
            note.title.toLowerCase().includes(searchText.toLowerCase())))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;