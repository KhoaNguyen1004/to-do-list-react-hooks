import React, { useRef } from "react";
import { useNotes } from "../context/NotesContext";

console.log("New run");

const NoteForm = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const noteRef = useRef();
  const { addNote } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set value properties for new note
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const note = noteRef.current.value;

    const newNote = {
      name: name,
      age: age,
      note: note,
    };

    addNote(newNote);

    // Reset form
    nameRef.current.value = "";
    ageRef.current.value = "";
    noteRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" ref={ageRef} />
      </div>
      <div>
        <label>Note: </label>
        <textarea ref={noteRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NoteForm;
