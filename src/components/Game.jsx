import Card from "./Card";
import "../styles/Game.css";
import pokemonNames from "../data/pokemonNames";
import { useState } from "react";
import _ from "lodash";

const Game = () => {
  const [pokeOptions, setPokeOptions] = useState(pokemonNames);

  const handleClick = (e) => {
    setPokeOptions(_.shuffle(pokeOptions));
    console.log(e.target.id);
  };

  const pokemonList = pokeOptions.map((name) => (
    <Card key={name} pokemonName={name} handleClick={handleClick} />
  ));

  return <div className="gameBoard">{pokemonList}</div>;
};

export default Game;
