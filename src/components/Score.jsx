const Score = ({ current, max }) => {
  return (
    <div className="score">
      <p>Current Score: {current}</p>
      <p>Max Score: {max}</p>
    </div>
  );
};

export default Score;
