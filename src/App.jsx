import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [word, setWord] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  useEffect(() => {
    if (loaded) {
      const meaning = findWord(word);
      document.getElementById("def").innerText = meaning;
    }

    setLoaded(true);
  }, [word]);

  function findWord(currentWord) {
    let meaning = "Word not found in the dictionary.";
    dict.forEach((ele) => {
      if (ele.word.toLowerCase() === currentWord.toLowerCase()) {
        meaning = ele.meaning;
      }
    });
    return meaning;
  }
  return (
    <>
      <h1>Dictionary App</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setWord(e.target.elements[0].value);
        }}
      >
        <input type="text" />
        <button>Search</button>
      </form>
      <div>
        <h4>Definition:</h4>
        <p id="def"></p>
      </div>
    </>
  );
}

export default App;
