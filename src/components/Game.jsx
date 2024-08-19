import _ from "lodash";
import "../index.css";
import { useState } from "react";

import pokemonNames from "../data/pokemonNames";
import Card from "./Card";
import Score from "./Score";

const Game = () => {
  const numCards = 12;
  const lowerCaseNames = pokemonNames.map((name) => name.toLowerCase());
  const selectedFew = _.shuffle(lowerCaseNames).slice(0, numCards);

  const [pokeOptions, setPokeOptions] = useState(selectedFew);
  const [clicked, setClicked] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

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

  return (
    <main>
      <header>
        <div>
          <h1>Pokememory</h1>
          <p>
            Click on a card to catch the pokemon, but never catch the same
            pokemon twice! Can you catch them all ?
          </p>
        </div>
        <Score current={currentScore} max={maxScore} />
      </header>
      <div className="gameBoard">{pokemonList}</div>
      <footer>Pro Tip: Refresh the page to get new Pokemons to catch!</footer>
    </main>
  );
};

export default Game;
