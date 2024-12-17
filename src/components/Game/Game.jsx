import _ from "lodash";
import "./game.css";
import { useEffect, useState } from "react";
import pokemonNames from "../../data/pokemonNames";
import Score from "../Score/Score";
import Difficulty from "../Difficulty/Difficulty";
import Board from "../Board/Board";
import LevelWonModal from "../LevelWonModal/LevelWonModal";
import levels from "../../data/levels";

const Game = () => {
  const [pokeOptions, setPokeOptions] = useState([]);
  const [currentLevelId, setCurrentLevelId] = useState(3);
  const [clickedCardsIds, setClickedCardsIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [playerWonAll, setPlayerWonAll] = useState(false);

  const currentLevel = levels.find((lvl) => lvl.id == currentLevelId);

  useEffect(() => {
    const currentLevel = levels.find((lvl) => lvl.id == currentLevelId);
    const selectedFew = _.shuffle(pokemonNames).slice(0, currentLevel.numCards);
    const normalizedSelection = selectedFew.map((name) => name.toLowerCase());
    setPokeOptions(normalizedSelection);
  }, [currentLevelId]);

  const handleMaxScore = () => {
    if (currentScore > maxScore) setMaxScore(currentScore);
  };

  const handleClick = (e) => {
    setIsGameLost(false);
    const clickedCardId = e.target.id;
    clickedCardsIds.includes(clickedCardId)
      ? handleGameIsLost()
      : handleGameContinues(clickedCardId);
    setPokeOptions(_.shuffle(pokeOptions));
  };

  const playerWonLevel = () => {
    return currentLevel.numCards == currentScore + 1;
  };

  const handlePlayerWon = () => {
    if (currentLevel.last) {
      setPlayerWonAll(true);
    }
    setIsGameWon(true);
  };

  const handleGameContinues = (clickedCardId) => {
    setCurrentScore(currentScore + 1);
    setClickedCardsIds([...clickedCardsIds, clickedCardId]);
    if (playerWonLevel()) handlePlayerWon();
  };

  const resetGame = () => {
    handleMaxScore();
    setCurrentScore(0);
    setClickedCardsIds([]);
  };

  const handleGameIsLost = () => {
    setIsGameLost(true);
    resetGame();
  };

  const playAgain = () => {
    setIsGameWon(false);
    resetGame();
  };

  const playNextLevel = () => {
    const nextLevel = levels.find(
      (lvl) => lvl.id === Number(currentLevelId) + 1
    );
    setCurrentLevelId(nextLevel.id);
    playAgain();
  };

  const changeCurrentLevelId = (id) => {
    setCurrentLevelId(id);
    resetGame();
  };

  return (
    <main>
      {isGameWon && (
        <LevelWonModal
          playAgain={playAgain}
          playNextLevel={playNextLevel}
          playerWonAll={playerWonAll}
        />
      )}
      <header>
        <div>
          <h1>Pokememorize</h1>
          <p>
            Click on a card to catch the pokemon, but never catch the same
            pokemon twice! <br />
            Can you catch them all ?
          </p>
        </div>
        <div className="score-difficulty">
          <Score
            current={currentScore}
            max={maxScore}
            levelMax={currentLevel.numCards}
          />
          <Difficulty
            changeCurrentLevelId={changeCurrentLevelId}
            currentLevelId={currentLevelId}
            levels={levels}
            playerWonAll={playerWonAll}
          />
        </div>
      </header>
      {isGameLost && <div className="lost"></div>}
      <Board pokeOptions={pokeOptions} handleClick={handleClick} />
      <footer>
        <p>&copy; 2024 Daniel Echevarria. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default Game;
