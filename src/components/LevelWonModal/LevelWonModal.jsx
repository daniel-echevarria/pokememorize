import "./LevelWonModal.css";
const LevelWonModal = ({ score, maxScore, playAgain, playNextLevel }) => {
  return (
    <div className="game-over">
      <div className="game-over-card">
        <p>Whaou! You reached the maximum score on this level!</p>
        <p>Well Done!</p>
        <p>Up for a challenge ? Try the next level!</p>
        <div className="replay-btns">
          <button onClick={playAgain}>Play Again</button>
          <button onClick={playNextLevel}>Next Level</button>
        </div>
      </div>
    </div>
  );
};

export default LevelWonModal;
