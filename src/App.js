import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
