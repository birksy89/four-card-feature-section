import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Reliable, efficient delivery Powered by Technology Our Artificial
          Intelligence powered tools use millions of project data points to
          ensure that your project is successful Supervisor Monitors activity to
          identify project roadblocks Team Builder Scans our talent network to
          create the optimal team for your project Karma Regularly evaluates our
          talent to ensure quality Calculator Uses data from past projects to
          provide better delivery estimates
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
