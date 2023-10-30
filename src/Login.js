import "./css/Login.css";
import { useEffect } from 'react';
import { register } from '@teamhanko/hanko-elements';
import { redirect, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Hanko } from "@teamhanko/hanko-elements";


const hankoApi = process.env.REACT_APP_HANKO_API_URL
const hanko = new Hanko(hankoApi);



const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button onClick={handleToggle}>
      {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    </button>
  );
};

export default function HankoAuth() {
    const navigate = useNavigate();

    const redirectToProfile = () => {
        navigate("/Profile");
    }

    useEffect(() => {
      register(hankoApi).catch((error) => {
        // handle error
      });
      document.addEventListener("hankoAuthSuccess", redirectToProfile)
      return () => {
        document.removeEventListener("hankoAuthSuccess", redirectToProfile);
      }
    }, []);
  

const SUPABASE_API_URL = "https://avhqsutntlcolmkxxlku.supabase.co" 
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2aHFzdXRudGxjb2xta3h4bGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5Nzk0NzcsImV4cCI6MjAxMzU1NTQ3N30.uWTQHXhE-M6AVGVThraOl0Hf2SylGYU0K1vi12NpIAI"


  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });

    // Add code to log the user into Supabase
    const supabaseAuthClient =(SUPABASE_API_URL, SUPABASE_API_KEY);

    document.addEventListener("hankoAuthSuccess", async () => {

      redirectToProfile();
    });

    return () => {
      document.removeEventListener("hankoAuthSuccess", redirectToProfile);
    };
  }, []);

  return (
    <>
     <header className="header">
        <h1 className="title">Notea</h1>
      </header>
    <div className="login-container">
      <hanko-auth />;   
    </div>
    </>
  );
};

