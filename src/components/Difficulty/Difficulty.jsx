import DifficultyBtn from "./DifficultyBtn";

const Difficulty = ({ changeDifficulty, selectedDifficulty }) => {
  return (
    <div className="difficulty-section">
      <DifficultyBtn
        text={"Easy"}
        numCards={8}
        changeDifficulty={changeDifficulty}
        isSelected={selectedDifficulty === "Easy"}
      />
      <DifficultyBtn
        text={"Moderate"}
        numCards={12}
        changeDifficulty={changeDifficulty}
        isSelected={selectedDifficulty === "Moderate"}
      />
      <DifficultyBtn
        text={"Hard"}
        numCards={16}
        changeDifficulty={changeDifficulty}
        isSelected={selectedDifficulty === "Hard"}
      />
      <DifficultyBtn
        text={"Extreme"}
        numCards={24}
        changeDifficulty={changeDifficulty}
        isSelected={selectedDifficulty === "Extreme"}
      />
    </div>
  );
};

export default Difficulty;
