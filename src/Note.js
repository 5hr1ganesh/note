import "./css/Note.css";
import React, { useState, useEffect } from "react";
import { supabase } from "./client";
import { useNavigate } from "react-router-dom";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to delete a note
  async function deleteNote(id) {
    try {
      await supabase.from("notes").delete().eq("id", id);

      // Update the state to remove the deleted note
      setNotes(notes.filter((note) => note.id !== id));
    } catch (err) {
      // Handle error
      setError(err);
    }
  }

  useEffect(() => {
    async function fetchNotes() {
      try {
        const { data, error } = await supabase
          .from("notes")
          .select("title,note,id");

        if (error) {
          setError(error);
          return;
        }

        setNotes(data);
      } catch (err) {
        setError(err);
      }
    }

    fetchNotes();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!notes) {
    return <div>Loading...</div>;
  }

  async function edit() {
    await navigate("/NoteEditor");
    return Promise.resolve();
  }

  return (
    <>
      <div className="note-card">
        {notes.map((note) => (
          <div className="Notes-Container" key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.note}</p>
            <button onClick={() => edit(note.id)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Note;
