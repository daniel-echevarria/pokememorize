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

const Card = ({ pokemonName }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    async function getPokemonInfo(name) {
      const myData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const jsonData = await myData.json();
      const pokemonImage = jsonData.sprites.front_shiny;
      setImage(pokemonImage);
    }
    getPokemonInfo(pokemonName);
  }, []);
  return <img src={image}></img>;
};

export default Card;
