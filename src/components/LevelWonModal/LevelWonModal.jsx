import "./LevelWonModal.css";
const LevelWonModal = ({ score, playAgain, playNextLevel, playerWonAll }) => {
  return (
    <div className="game-over">
      <div className="game-over-card">
        {playerWonAll ? (
          <>
            <p>🎉 Oh my god! You’ve memorized them all! 🎉</p>
            <p>
              A legend says there is a hidden level after this one but nobody
              ever came back to confirm...
            </p>
          </>
        ) : (
          <>
            <p>{`Whaou! You reached the maximum score on this level!
          You caught ${score} pokemons out of ${score} Well Done!`}</p>
            <p>Up for a challenge ? Try the next level!</p>
          </>
        )}
        <div className="replay-btns">
          <button onClick={playAgain}>Play Again</button>
          {!playerWonAll && <button onClick={playNextLevel}>Next Level</button>}
        </div>
      </div>
    </div>
  );
};

export default LevelWonModal;
