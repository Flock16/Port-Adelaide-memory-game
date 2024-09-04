import { useEffect, useState } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import { playersData } from "./utils/playerData";
import { shuffle } from "./utils/shuffleArray";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [players, setPlayers] = useState([]);
  const [difficultyLevel, setDifficultyLevel] = useState(12);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    // Mock API call
    const data = playersData;

    setPlayers(data);

    const shuffledArray = shuffle(data);
    const shortenedPlayerList = shuffledArray.slice(0, 12);
    setFilteredPlayers(shortenedPlayerList);
  }, []);

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

    // Create new deck
    const shuffledArray = shuffle(players);
    // console.log(shuffledArray);
    const shortenedPlayerList = shuffledArray.slice(0, difficultyLevel);
    // console.log(shortenedPlayerList);
    setFilteredPlayers(shortenedPlayerList);
  };

  const handleChangeDifficulty = (difficulty) => {
    setDifficultyLevel(difficulty);
    setScore(0);

    const shuffledArray = shuffle(players);
    const shortenedPlayerList = shuffledArray.slice(0, difficulty);
    setFilteredPlayers(shortenedPlayerList);
  };

  return (
    <div>
      <Header />
      <Scoreboard
        score={score}
        highScore={highScore}
        handleChangeDifficulty={handleChangeDifficulty}
      />
      <Gameboard
        handleAddScore={handleAddScore}
        handleResetScore={handleResetScore}
        filteredPlayers={filteredPlayers}
        setFilteredPlayers={setFilteredPlayers}
      />
    </div>
  );
}

export default App;
