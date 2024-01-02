"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "@/context/ThemeProvider";

const Animation = () => {
  const [init, setInit] = useState(false);
  const { mode } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [mode]);

  const particlesLoaded = (container: Container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: `${mode === "light" ? "#fcf8fc" : "#343a40"}`,
        },
      },
      fpsLimit: 50,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 300,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: `${mode === "light" ? "#d7c9d9" : "#7d767f"}`, // Particle color for contract theme
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
            top: "bounce",
            bottom: "bounce",
          },
          random: false,
          speed: 1.6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 65,
        },
        opacity: {
          value: 0.7, // Adjust opacity to your preference
        },
        shape: {
          type: "edge", // You can experiment with other shapes like "triangle" or "edge" based on your preference
        },
        size: {
          value: { min: 4, max: 20 },
        },
      },
      detectRetina: true,
    }),
    [mode]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded as any}
        options={options as any}
      />
    );
  }

  return <></>;
};

export default Animation;
