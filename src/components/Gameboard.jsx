import { useEffect, useState } from "react";
import "../styles/gameboard.css";
import { playersData } from "../utils/playerData";
import PlayerCard from "./PlayerCard";
import { shuffle } from "../utils/shuffleArray";
import { arrayContainsObject } from "../utils/utilFunctions";

const Gameboard = ({
  handleAddScore,
  handleResetScore,
  difficulty,
  setScore,
}) => {
  const [pickedPlayers, setPickedPlayers] = useState([]);
  const [players, setPlayers] = useState([]);

  // useEffect to simulate an API call
  useEffect(() => {
    // Mock API call
    const shuffledArray = shuffle(playersData);
    const shortenedPlayerList = shuffledArray.slice(0, difficulty);
    // console.log(shortenedPlayerList);
    setPlayers(shortenedPlayerList);
    setPickedPlayers([]);
    setScore(0);
  }, [difficulty, setScore]);

  const handlePlayerPicked = (player) => {
    // console.log(player);

    if (arrayContainsObject(pickedPlayers, player)) {
      setPickedPlayers([]);
      handleResetScore();
    } else {
      setPickedPlayers([...pickedPlayers, player]);
      handleAddScore();
    }

    const shufflePlayers = [...shuffle(players)];
    // console.log(shufflePlayers);
    setPlayers(shufflePlayers);
  };

  return (
    <div className="gameboard-container">
      {players.map((player) => {
        return (
          <PlayerCard
            player={player}
            key={player.id}
            handlePlayerPicked={handlePlayerPicked}
          />
        );
      })}
    </div>
  );
};

export default Gameboard;
