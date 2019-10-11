import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import CharacterCard from "./components/CharacterCard";

const App = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        const charData = response.data.results; //charData is now set to the specific parts of the resonse from the API that I need
        console.log("Character Data", charData); 
        setCharacter(charData);
      })
      .catch(error => {
        console.log("Welcome to the dark side, mwahaha!", error);
      });
  }, []); //Dependency array 

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
