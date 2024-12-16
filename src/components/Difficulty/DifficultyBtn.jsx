import "./difficultyBtn.css";
const DifficultyBtn = ({ levelId, text, changeCurrentLevelId, isSelected }) => {
  return (
    <>
      <button
        value={levelId}
        className={isSelected ? "selected difficulty-btn" : "difficulty-btn"}
        onClick={(e) => changeCurrentLevelId(e.target.value)}
      >
        {text}
      </button>
    </>
  );
};

export default DifficultyBtn;
