import React from "react";
import Entry from "./Entry";
import pokepedia from "../pokepedia";

//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.


function createEntry(pokeTerm) {
  return (
    <Entry
      key={pokeTerm.id}
      img={pokeTerm.image}
      name={pokeTerm.name}
      description={pokeTerm.description}
      Evolutions={pokeTerm.Evolutions}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Poképedia</span>
      </h1>
      <dl className="dictionary">{pokepedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
