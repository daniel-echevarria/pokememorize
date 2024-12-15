import "../styles/difficultyBtn.css";
const DifficultyBtn = ({ text, numCards, changeDifficulty }) => {
  return (
    <>
      <button
        className="difficulty-btn"
        onClick={() => changeDifficulty(numCards)}
      >
        {text}
      </button>
    </>
  );
};

export default DifficultyBtn;
