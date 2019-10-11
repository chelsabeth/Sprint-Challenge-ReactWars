import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        const data = response.data.results;
        console.log("Character Data", data);
        setCharacter(data);
      })
      .catch(error => {
        console.log("Welcome to the dark side, mwahaha!", error);
      });
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {character.map((character, index) => {
        //Where my character card will go
      })}
    </div>
  );
};

export default App;
