import { useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [difficulty, setDifficulty] = useState(12);

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
      <Scoreboard
        score={score}
        highScore={highScore}
        setDifficulty={setDifficulty}
      />
      <Gameboard
        handleAddScore={handleAddScore}
        handleResetScore={handleResetScore}
        difficulty={difficulty}
        setScore={setScore}
      />
    </div>
  );
}

export default App;
