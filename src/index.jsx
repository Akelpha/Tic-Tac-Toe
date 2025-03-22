import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./game";
import "./style.css";
import ParticlesBackground from "./Particlesjs";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ParticlesBackground />
    <App />
  </StrictMode>
);
