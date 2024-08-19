// App planning
// Fetch 12 different images from an API
// With each Image create a card with an id
// Display the 12 cards on the screen
// the player can click the cards
// Once he clicks one card multiple things happen:
// store the id of the clicked card
// shuffle the cards to be display
// User can click cards again
// if the clicked card id is the same as the stored id:
// the game is lost add best score

import { useEffect } from "react";
import { useState } from "react";

const Card = ({ pokemonName, handleClick }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function getPokemonInfo(name) {
      const myData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const jsonData = await myData.json();
      const pokeImage = jsonData.sprites.front_default;
      const pokeName = jsonData.name;
      setImage(pokeImage);
      setName(pokeName);
    }
    getPokemonInfo(pokemonName);
  }, [pokemonName]);

  return (
    <div className="card" onClick={handleClick}>
      <img src={image} id={name}></img>
      <p>{name}</p>
    </div>
  );
};

export default Card;
