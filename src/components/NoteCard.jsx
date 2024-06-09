import React from "react";
import { useNotes } from "../NotesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const NoteCard = ({ note, index }) => {
  const { deleteNote } = useNotes();

  return (
    <div className="note-card">
      <p>Name: {note.name}</p>
      <p>Age: {note.age}</p>
      <p>Note: {note.note}</p>
      <button onClick={() => deleteNote(index)}>
        {" "}
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>
    </div>
  );
};

export default NoteCard;
