import "./Board.css";
import Card from "./Card";
const Board = ({ pokeOptions, handleClick }) => {
  const pokemonList = pokeOptions.map((name) => (
    <Card key={name} pokemonName={name} handleClick={handleClick} />
  ));

  return <div className="gameBoard">{pokemonList}</div>;
};

export default Board;
