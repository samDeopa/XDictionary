import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const dict = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];
  useEffect(() => {
    const meaning = findWord(word);

    if (meaning != "") {
      document.getElementById("def").innerText = meaning;
    }

    function findWord(currentWord) {
      let meaning = "";
      dict.forEach((ele) => {
        if (ele.word === currentWord) {
          meaning = ele.meaning;
        }
      });
      return meaning;
    }
  }, [word]);

  return (
    <>
      <h1>Dicionary App</h1>

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
        <h4>Definition</h4>
        <p id="def"></p>
      </div>
    </>
  );
}

export default App;