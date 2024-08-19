import _ from "lodash";
import "../styles/Game.css";
import { useState } from "react";

import pokemonNames from "../data/pokemonNames";
import Card from "./Card";
import Score from "./Score";

const selectedFew = pokemonNames.

const Game = () => {
  const [pokeOptions, setPokeOptions] = useState(pokemonNames);
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
    <>
      <Score current={currentScore} max={maxScore} />
      <div className="gameBoard">{pokemonList}</div>;
    </>
  );
};

export default Game;
