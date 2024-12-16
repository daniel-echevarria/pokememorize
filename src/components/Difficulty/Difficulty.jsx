import DifficultyBtn from "./DifficultyBtn";

const Difficulty = ({
  changeCurrentLevelId,
  currentLevelId,
  levels,
  playerWonAll,
}) => {
  return (
    <div className="difficulty-section">
      {levels.map((level) => {
        if (level.hidden && !playerWonAll) return;
        return (
          <>
            <DifficultyBtn
              key={level.id}
              levelId={level.id}
              text={level.text}
              numCards={level.numCards}
              changeCurrentLevelId={changeCurrentLevelId}
              isSelected={currentLevelId == level.id}
            />
          </>
        );
      })}
    </div>
  );
};

export default Difficulty;
