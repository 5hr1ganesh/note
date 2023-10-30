import "./css/editor.css"
import React, { useState } from "react";
import { supabase } from "./client";
// import { Hanko } from "@teamhanko/hanko-frontend-sdk";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

// const hankoApi = process.env.REACT_APP_HANKO_API_URL;
// const  hanko = new Hanko(hankoApi);
const NoteEditor = () => {
  const [title, setTitle] = useState("");
  const [note, setContent] = useState("");
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  async function noteTable() {
    let { data: users, error } = await supabase
      .from("notes")
      .select("id");
    // Use the `id` to display each note in a separate container
    setNotes(users.map((note) => {
        console.log(`hgdehjg - ${note.id}`);
      return (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.note}</p>
        </div>
      );
    }));
    
  }

  async function handleSave() {
    
  

    try {
      const { data, error } = await supabase
        .from("notes")
        .upsert([
          {
            title: title,
            note: note,
            // email: Useremail.email,
          },
        ])
        .select();

      if (error) {
        setError(error);
        return;
      }

      // Clear the form
      setTitle("");
      setContent("");

      // Update the list of notes
      await noteTable();
    } catch (err) {
      setError(err);
    }
  }
  const navigateToNotes = () => {
    navigate("/Notes")
}

  return (
    <div className="edit-box">
      <h1>Create a new note</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="note"
        value={note}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      {error && <div>Error: {error.message}</div>}
      {/* Display the notes in separate containers */}
      {notes}
      <button className= "butt" onClick={navigateToNotes}>Notes</button>
    </div>
  );
};

export default NoteEditor;
