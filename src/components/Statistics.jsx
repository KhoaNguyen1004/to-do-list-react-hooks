import React from "react";
import { useNotes } from "../NotesContext";

const Statistics = () => {
  const { notes } = useNotes();

  const totalNotes = notes.length;
  const notesOver16 = notes.filter((note) => note.age > 16).length;
  const notesUnder17 = notes.filter((note) => note.age < 17).length;

  return (
    <div className="statistics">
      <p>Total Notes: {totalNotes}</p>
      <p>Notes by Members over 16 years old: {notesOver16}</p>
      <p>Notes by Members under 17 years old: {notesUnder17}</p>
    </div>
  );
};

export default Statistics;
