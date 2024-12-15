import "./difficultyBtn.css";
const DifficultyBtn = ({ text, numCards, changeDifficulty, isSelected }) => {
  return (
    <>
      <button
        className={isSelected ? "selected difficulty-btn" : "difficulty-btn"}
        onClick={(e) => changeDifficulty(e, numCards)}
        value={text}
      >
        {text}
      </button>
    </>
  );
};

export default DifficultyBtn;
