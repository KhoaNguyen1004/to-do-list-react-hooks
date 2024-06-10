import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";

console.log("New run");

const NoteForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [note, setNote] = useState("");
  const { addNote } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && note) {
      addNote({ name, age: parseInt(age), note });
      setName("");
      setAge("");
      setNote("");
    }
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Age: </label>
        <input value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Note: </label>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NoteForm;
