import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Sidebar, Main } from "./components";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
