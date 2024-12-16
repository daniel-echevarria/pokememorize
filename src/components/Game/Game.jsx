import _ from "lodash";
import "./game.css";
import { useEffect, useState } from "react";
import pokemonNames from "../../data/pokemonNames";
import Score from "../Score/Score";
import Difficulty from "../Difficulty/Difficulty";
import Board from "../Board/Board";
import LevelWonModal from "../LevelWonModal/LevelWonModal";

const levels = [
  { id: 1, text: "Extra Easy", numCards: 4 },
  { id: 2, text: "Easy", numCards: 8 },
  { id: 3, text: "Moderate", numCards: 12 },
  { id: 4, text: "Hard", numCards: 16 },
  { id: 5, text: "Extra Hard", numCards: 2 },
  { id: 6, text: "Impossible", numCards: 120, hidden: true },
];

const Game = () => {
  const [currentLevelId, setCurrentLevelId] = useState(3);
  const [pokeOptions, setPokeOptions] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [playerWonAll, setPlayerWonAll] = useState(false);

  const getCurrentLevel = levels.find((lvl) => {
    return lvl.id == currentLevelId;
  });

  useEffect(() => {
    const selectedFew = _.shuffle(pokemonNames).slice(
      0,
      getCurrentLevel.numCards
    );
    const normalizedSelection = selectedFew.map((name) => name.toLowerCase());
    setPokeOptions(normalizedSelection);
  }, [getCurrentLevel.numCards]);

  const handleMaxScore = () => {
    if (currentScore > maxScore) setMaxScore(currentScore);
  };

  const handleClick = (e) => {
    setIsGameLost(false);
    const clickedCardId = e.target.id;
    clicked.includes(clickedCardId)
      ? handleGameIsLost()
      : handleGameContinues(clickedCardId);
    setPokeOptions(_.shuffle(pokeOptions));
  };

  const playerWonLevel = () => {
    return getCurrentLevel.numCards == currentScore + 1;
  };

  const handlePlayerWon = () => {
    if (levels.indexOf(getCurrentLevel) === levels.length - 2) {
      setPlayerWonAll(true);
    }
    setIsGameWon(true);
  };

  const handleGameContinues = (clickedCardId) => {
    setCurrentScore(currentScore + 1);
    setClicked([...clicked, clickedCardId]);
    if (playerWonLevel()) handlePlayerWon();
  };

  const resetGame = () => {
    handleMaxScore();
    setCurrentScore(0);
    setClicked([]);
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
    const currentLvlIndex = levels.indexOf(getCurrentLevel);
    const nextLevel = levels[currentLvlIndex + 1];
    setCurrentLevelId(nextLevel.text);
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
            levelMax={getCurrentLevel.numCards}
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
