import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";
import { MdDraw } from "react-icons/md";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  // usestate hook to hold array of notes
  const[notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is trial note!",
    date: "21/04/2022",
    },

    {
      id: nanoid(),
      text: "This is second note!",
      date: "23/10/2022",
      },

      {
        id: nanoid(),
        text: "This is third note!",
        date: "06/12/2022",
        },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
      const savedNotes = JSON.parse(
        localStorage.getItem(
          'react-notes-app-data'));

      if (savedNotes) {
        setNotes(savedNotes);
      }
  }, []);

  useEffect(()=> {
      localStorage.setItem(
        'react-notes-app-data', 
        JSON.stringify(notes)
      );
  }, [notes]);

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // Array of all other notes and will add new note to the end of it.
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !==id);
    setNotes(newNotes);

  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode = {setDarkMode}/>
      <Search handleSearchNote = {setSearchText}/>
      <NotesList 
        notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText.toLowerCase()))} 
        handleAddNote={addNote}
        handleDeleteNote = {deleteNote}/>
      </div>
    </div>
  );
};

export default App;