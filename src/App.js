import React from "react";
import { useState } from "react";
import List from './List';
import data from "./data";
function App() {
  const [people, setpeople] = useState(data);
  return (
    <>
      <div className="container">
        <h1>Birthdays</h1>
        <button onClick={()=>setpeople(data)}>refresh</button>
        <hr />
        {people.map((person) => {
        return <List people={person}/>;
        })}
        <button onClick={()=>setpeople([])}>clear all</button>
      </div>
    </>
  );
}

export default App;
