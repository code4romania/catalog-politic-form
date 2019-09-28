import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to catalog politic form!
        </p>
        <Link to="/newProfile">Add new profile</Link>
      </header>
      </div>
  );
};

export default Home;