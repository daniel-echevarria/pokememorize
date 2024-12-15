import _ from "lodash";
import "../index.css";
import { useEffect, useState } from "react";
import pokemonNames from "../data/pokemonNames";
import Card from "./Card";
import Score from "./Score";
import DifficultyBtn from "./DifficultyBtn";

const Game = () => {
  const [numCards, setNumCards] = useState(12);
  const [pokeOptions, setPokeOptions] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    const selectedFew = _.shuffle(pokemonNames).slice(0, numCards);
    const normalizedSelection = selectedFew.map((name) => name.toLowerCase());
    setPokeOptions(normalizedSelection);
  }, [numCards]);

  const handleMaxScore = () => {
    if (currentScore > maxScore) setMaxScore(currentScore);
  };

  const handleClick = (e) => {
    const clickedCardId = e.target.id;
    clicked.includes(clickedCardId)
      ? handleGameOver()
      : handleGameContinues(clickedCardId);
    setPokeOptions(_.shuffle(pokeOptions));
  };

  const handleGameContinues = (clickedCardId) => {
    setCurrentScore(currentScore + 1);
    setClicked([...clicked, clickedCardId]);
  };

  const handleGameOver = () => {
    handleMaxScore();
    setClicked([]);
    setCurrentScore(0);
  };

  const pokemonList = pokeOptions.map((name) => (
    <Card key={name} pokemonName={name} handleClick={handleClick} />
  ));

  const changeDifficulty = (num) => {
    setNumCards(num);
  };

  return (
    <main>
      <header>
        <div>
          <h1>Pokememory</h1>
          <p>
            Click on a card to catch the pokemon, but never catch the same
            pokemon twice! Can you catch them all ?
          </p>
          <DifficultyBtn
            text={"Easy"}
            numCards={8}
            changeDifficulty={changeDifficulty}
          />
        </div>
        <Score current={currentScore} max={maxScore} />
      </header>
      <div className="gameBoard">{pokemonList}</div>
      <footer>Pro Tip: Refresh the page to get new Pokemons to catch!</footer>
    </main>
  );
};

export default Game;
