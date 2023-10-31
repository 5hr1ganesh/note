import React, { useState, useEffect } from "react";
import { Hanko } from "@teamhanko/hanko-elements";
import { register } from "@teamhanko/hanko-elements";
import { Navigate } from "react-router-dom";
import "./css/Login.css";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;
const hanko = new Hanko(hankoApi);

const SUPABASE_API_URL = "https://avhqsutntlcolmkxxlku.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2aHFzdXRudGxjb2xta3h4bGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5Nzk0NzcsImV4cCI6MjAxMzU1NTQ3N30.uWTQHXhE-M6AVGVThraOl0Hf2SylGYU0K1vi12NpIAI";

const HankoAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });

    document.addEventListener("hankoAuthSuccess", async () => {
      

      const { user } = await supabaseAuthClient.signIn();
      if (user) {
        setIsLoggedIn(true);
        navigate("/Profile");
      }
    });

    return () => {
      document.removeEventListener("hankoAuthSuccess", () => {});
    };
  }, []);

  if (isLoggedIn) {
    return <Navigate to="/Profile" />;
  }

  return (
    <>
      <header className="header">
        <h1 className="title">Notea</h1>
      </header>
      <div className="login-container">
        <hanko-auth />
      </div>
    </>
  );
};

export default HankoAuth;
