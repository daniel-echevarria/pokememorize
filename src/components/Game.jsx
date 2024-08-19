import Card from "./Card";
import "../styles/Game.css";
import pokemonNames from "../data/pokemonNames";
import { useEffect } from "react";
import { useState } from "react";

const Game = () => {
  const handleClick = (e) => {
    console.log(e.target.id);
  };

  const pokemonList = pokemonNames.map((name) => (
    <Card key={name} pokemonName={name} handleClick={handleClick} />
  ));

  return <div className="gameBoard">{pokemonList}</div>;
};

export default Game;
