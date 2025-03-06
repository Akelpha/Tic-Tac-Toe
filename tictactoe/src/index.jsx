import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import ParticlesBackground from "./Particlesjs";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <ParticlesBackground />
    </div>
    <App />
  </StrictMode>
);
