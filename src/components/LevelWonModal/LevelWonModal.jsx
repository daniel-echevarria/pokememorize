import "./LevelWonModal.css";
const LevelWonModal = ({ playAgain, playNextLevel, playerWonAll }) => {
  const WonThemAllText = () => {
    return (
      <>
        <p>🎉 Oh my god! You’ve memorized them all! 🎉</p>
        <p>
          A legend says there is a hidden level after this one but nobody ever
          came back to confirm...
        </p>
      </>
    );
  };

  const NormalText = () => {
    return (
      <>
        <p>Whaou! You reached the maximum score on this level!</p>
        <p>Well Done!</p>
        <p>Up for a challenge ? Try the next level!</p>
      </>
    );
  };

  return (
    <div className="game-over">
      <div className="game-over-card">
        {playerWonAll ? <WonThemAllText /> : <NormalText />}
        <div className="replay-btns">
          <button onClick={playAgain}>Play Again</button>
          {!playerWonAll && <button onClick={playNextLevel}>Next Level</button>}
        </div>
      </div>
    </div>
  );
};

export default LevelWonModal;
