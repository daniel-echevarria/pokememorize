import { useEffect } from "react";
import { useState } from "react";
import "../styles/card.css";
import _ from "lodash";

const Card = ({ pokemonName, handleClick }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function getPokemonInfo(name) {
      try {
        const myData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const jsonData = await myData.json();
        const pokeImage = jsonData.sprites.front_default;
        const pokeName = jsonData.name;
        setImage(pokeImage);
        setName(pokeName);
      } catch {
        const myData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const jsonData = await myData.json();
        const pokeImage = jsonData.sprites.front_default;
        const pokeName = jsonData.name;
        setImage(pokeImage);
        setName(pokeName);
      }
    }
    getPokemonInfo(pokemonName);
  }, [pokemonName]);

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} id={name} />
      <p>{_.startCase(name)}</p>
    </div>
  );
};

export default Card;
