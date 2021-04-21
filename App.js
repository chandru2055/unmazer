import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chatbot from "./Chatbot";

import './App.css';

function App() {
  return (
    <div className="App">
<Header/>
<div className="app_page">
  <Sidebar/>

  <Chatbot/>
</div>
    </div>
  );
}

export default App;
