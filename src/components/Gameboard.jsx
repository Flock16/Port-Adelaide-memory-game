import { useState } from "react";
import "../styles/gameboard.css";
// import { playersData } from "../utils/playerData";
import PlayerCard from "./PlayerCard";
import { shuffle } from "../utils/shuffleArray";
import { arrayContainsObject } from "../utils/utilFunctions";

const Gameboard = ({
  handleAddScore,
  handleResetScore,
  filteredPlayers,
  setFilteredPlayers,
}) => {
  const [pickedPlayers, setPickedPlayers] = useState([]);

  // console.log(filteredPlayers);
  // filteredPlayers.forEach((player) => console.log(player));

  const handlePlayerPicked = (player) => {
    // console.log(player);

    if (arrayContainsObject(pickedPlayers, player)) {
      setPickedPlayers([]);
      handleResetScore();
    } else {
      setPickedPlayers([...pickedPlayers, player]);
      handleAddScore();
    }

    const shufflePlayers = [...shuffle(filteredPlayers)];
    // console.log(shufflePlayers);
    setFilteredPlayers(shufflePlayers);
  };

  return (
    <div className="gameboard-container">
      {filteredPlayers.map((player) => {
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
