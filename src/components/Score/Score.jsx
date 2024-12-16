import "./score.css";

const Score = ({ current, max }) => {
  return (
    <div className="score">
      <p>Score: {current}</p>
      <p>Max Score: {max}</p>
    </div>
  );
};

export default Score;
