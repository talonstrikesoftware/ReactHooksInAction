import React from 'react';
import './App.css';
import bookablesData from "../bookablesData";
import Bookables from "./Bookables";

function App() {
  return (
    <div className="App">
      <Bookables bookablesByGroup={bookablesData} />
    </div>  
  );
}

export default App;
