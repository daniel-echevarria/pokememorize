import DifficultyBtn from "./DifficultyBtn";

const Difficulty = ({ changeDifficulty, selectedDifficulty, levels }) => {
  return (
    <div className="difficulty-section">
      {levels.map((level) => {
        if (level.hidden) return;
        return (
          <>
            <DifficultyBtn
              key={level.text}
              text={level.text}
              numCards={level.numCards}
              changeDifficulty={changeDifficulty}
              isSelected={selectedDifficulty === level.text}
            />
          </>
        );
      })}
    </div>
  );
};

export default Difficulty;
