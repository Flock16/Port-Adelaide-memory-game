import "../styles/playerCard.css";

const PlayerCard = ({ player, handlePlayerPicked }) => {
  return (
    <div
      className="playerCardContainer"
      onClick={() => handlePlayerPicked(player)}
    >
      <img className="playerImage" src={player.image}></img>
      <p className="playerName">{player.playerName}</p>
    </div>
  );
};

export default PlayerCard;
