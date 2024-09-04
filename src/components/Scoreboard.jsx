import "../styles/scoreboard.css";

const Scoreboard = ({ score, highScore, handleChangeDifficulty }) => {
  return (
    <div className="scoreboard-container">
      <div>
        <p className="instuctions">
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </p>
      </div>
      <div>
        <button
          className="diffucultyButton"
          onClick={() => {
            handleChangeDifficulty(12);
          }}
        >
          Easy
        </button>
        <button
          className="diffucultyButton"
          onClick={() => {
            handleChangeDifficulty(16);
          }}
        >
          Medium
        </button>
        <button
          className="lastDiffucultyButton"
          onClick={() => {
            handleChangeDifficulty(20);
          }}
        >
          Hard
        </button>
      </div>
      <div>
        <p className="instuctions scoreBoard">Score: {score}</p>
        <p className="instuctions scoreBoard">High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
