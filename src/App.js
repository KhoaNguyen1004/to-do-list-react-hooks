import React from "react";
import { useNotes } from "./context/NotesContext";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <div className="app">
      <div className="form-container">
        <NoteForm />
        <Statistics />
      </div>
      <div className="notes-list">
        <NoteCards />
      </div>
    </div>
  );
};

const NoteCards = () => {
  const { notes } = useNotes();

  return (
    <div className="notes-grid">
      {notes.map((note, index) => (
        <NoteCard key={index} note={note} index={index} />
      ))}
    </div>
  );
};

export default App;
