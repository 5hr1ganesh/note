import React from "react";
import "./css/landing.css";
import { FaBreadSlice, FaReact, FaDatabase, FaGithub } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Notea</h1>
        <h2>
          A notes keeping website made with React, Bun.js, Supabase and Hanko
          auth
        </h2>
      </header>
      <main>
        <section className="features">
          <h3>Features</h3>
          <ul>
            <li>Keep track of your notes easily and securely</li>
            <li>Collaborate with others on notes</li>
            <li>Access your notes from anywhere</li>
            <li>Made with the latest technologies:</li>
            <li>
              <a href="https://bun.sh/learn">
                <FaBreadSlice /> Bun.js
              </a>
            </li>
            <li>
              <a href="https://reactjs.org/tutorial/tutorial.html">
                <FaReact /> React
              </a>
            </li>
            <li>
              <a href="https://supabase.com/docs">
                <FaDatabase /> Supabase
              </a>
            </li>
            <li>
              <a href="https://github.com/hanko-auth/hanko-auth">
                <FaGithub /> Hanko auth
              </a>
            </li>
          </ul>
        </section>
        <section className="cta">
          <h3>Get started today!</h3>
          <a href="/login">LogIn or Sign up for free</a>
        </section>
      </main>
      <footer>
        <p>
          Copyright &copy; 2023 Notea
          <br />
          <a href="https://github.com/your-github-username/Notea">
            <FaGithub /> GitHub repository
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
