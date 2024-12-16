import "./score.css";

const Score = ({ current, max, levelMax }) => {
  return (
    <div className="score">
      <p>
        Score: {current}/{levelMax}
      </p>
      <p>
        Max Score: {max}/{levelMax}
      </p>
    </div>
  );
};

export default Score;
