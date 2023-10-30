import React from "react";
import Note from "./Note";
import {supabase} from "./client";
import NoteEditor from "./editor";
import "./css/Note.css"

const Notes = () => {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    // Fetch all notes from the Supabase database
    async function fetchNotes() {
      const { data, error } = await supabase
        .from("notes")
        .select("title,note,id");

      if (error) {
        console.error(error);
        return;
      }

      setNotes(data);
    }

    fetchNotes();
  }, []);

  return (
    <div>
      
      <div style={{marginTop:"14px"}} className="note-edit">
      <NoteEditor/>
      </div>
      <h1 style={{marginTop:"14px"}}>Notes</h1>
      <ul style={{paddingLeft: "0px"}}>
      
          <Note note={notes} />
        {/* <button onClick={NoteEditor}>+ New Note</button> */}
        
      </ul>
    </div>
  );
};

export default Notes;
