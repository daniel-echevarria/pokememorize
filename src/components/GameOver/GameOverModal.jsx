import "./gameOverModal.css";
const GameOverModal = ({ score, maxScore, playAgain }) => {
  return (
    <div className="game-over">
      <div className="game-over-card">
        <p>Ooops you clicked the same pokemon twice!</p>
        <p>Score: {score} </p>
        <p>Can you make it to the top? {maxScore} ?</p>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default GameOverModal;
