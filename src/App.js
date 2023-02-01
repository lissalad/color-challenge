import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SwatchRow from "./components/SwatchRow";
import Text from "./components/Text";

function App() {
  const [colors, setColors] = useState([
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ]);
  const [correctColor, setCorrectColor] = useState(colors[randomIndex()]);
  const [guess, setGuess] = useState(null);

  console.log(correctColor);
  // console.log((16).toString(16));
  // for (let i = 0; i < 3; i += 1) {
  //   setColors(colors[i] = );
  // }

  console.log(colors);

  function randomIndex() {
    return Math.floor(Math.random() * 3);
  }

  function getRandomColor() {
    let color = "";
    for (let i = 0; i < 3; i += 1) {
      const randomValue = Math.floor(Math.random() * 255);
      color += randomValue.toString(16);
    }

    while (color.length < 6) {
      // needs better solution
      color += "0";
    }

    return color;
  }

  return (
    <div className="App">
      <SwatchRow
        colors={colors}
        correctColor={correctColor}
        setGuess={setGuess}
      />
      <Text correctColor={correctColor} guess={guess} />
    </div>
  );
}

export default App;
