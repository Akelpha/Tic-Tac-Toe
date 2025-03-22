import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import ParticlesBackground from "./Particlesjs";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ParticlesBackground />
    <App />
  </StrictMode>
);
