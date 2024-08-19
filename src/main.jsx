import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Card from "./components/Card";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Card pokemonName={"mewtwo"} />
    <Card pokemonName={"alakazam"} />
  </StrictMode>
);
