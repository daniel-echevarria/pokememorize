const DifficultyBtn = ({ text, numCards, changeDifficulty }) => {
  return (
    <>
      <button onClick={() => changeDifficulty(numCards)}>{text}</button>
    </>
  );
};

export default DifficultyBtn;
