import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Game from "./components/Game/Game";
import "./styles/animations.css";
import "./styles/fonts.css";
import "./styles/layout.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Game />
  </StrictMode>
);
