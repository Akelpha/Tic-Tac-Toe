import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 199,
            density: {
              enable: true,
              value_area: 1103,
            },
          },
          color: {
            value: "#fb2c36",
          },
          shape: {
            type: "triangle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#fb2c36",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}
