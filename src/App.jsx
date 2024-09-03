import { useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleAddScore = () => {
    setScore(score + 1);

    const incrementedScore = score + 1;
    setScore(incrementedScore);
    const newHighScore = Math.max(incrementedScore, highScore);
    setHighScore(newHighScore);
  };
  const handleResetScore = () => {
    setScore(0);
    if (highScore < score) setHighScore(score);
  };

  return (
    <div>
      <Header />
      <Scoreboard score={score} highScore={highScore} />
      <Gameboard
        handleAddScore={handleAddScore}
        handleResetScore={handleResetScore}
      />
    </div>
  );
}

export default App;
