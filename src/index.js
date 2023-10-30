import './css/global.css';

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Login from './Login';
import Profile from './Profile';
// import LoginBtn from './Login';
import HankoAuth from './Login';
import Note from './Note';
import Notes from './Notes';
import NoteEditor from './editor';
import LandingPage from './landingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<HankoAuth />}/>
        <Route path="/Note" element={<Note />}/>
        <Route path="/NoteEditor" element={<NoteEditor />}/>
        <Route path="/Notes" element={<Notes />}/>
        <Route path="/profile" element={<Profile/>}/>        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)