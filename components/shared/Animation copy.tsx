// "use client";
// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import type { Container } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";
// import { useTheme } from "@/context/ThemeProvider";

// const Animation = () => {
//   const { mode } = useTheme();
//   console.log("thenme mode from animation", mode);
//   const [init, setInit] = useState(false);
//   const [key, setKey] = useState(0); // Add key state

//   useEffect(() => {
//     console.log("useEffect triggered with mode:", mode);

//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, [mode]);

//   const particlesLoaded = (container: Container) => {
//     console.log("Particles loaded:", container);
//   };

//   const options = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: `${mode === "light" ? "#f8f9fa" : "#343a40"}`,
//         },
//       },
//       fpsLimit: 50,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "push",
//           },
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//           resize: true,
//         },
//         modes: {
//           push: {
//             quantity: 10,
//           },
//           repulse: {
//             distance: 300,
//             duration: 0.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: `${mode === "light" ? "#f8f9fa" : "#7d767f"}`, // Particle color for contract theme
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "out",
//             top: "bounce",
//             bottom: "bounce",
//           },
//           random: false,
//           speed: 1.6,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//             area: 800,
//           },
//           value: 65,
//         },
//         opacity: {
//           value: 0.7, // Adjust opacity to your preference
//         },
//         shape: {
//           type: "edge", // You can experiment with other shapes like "triangle" or "edge" based on your preference
//         },
//         size: {
//           value: { min: 4, max: 20 },
//         },
//       },
//       detectRetina: true,
//     }),
//     [mode]
//   );

//   useEffect(() => {
//     // Update the key when mode changes
//     console.log("Key updated. New key:", key);

//     setKey((prevKey) => prevKey + 1);
//   }, [mode]);

//   if (init) {
//     console.log("Rendering Particles component with key:", key);

//     return (
//       <Particles
//         key={key} // Use key prop to trigger re-render
//         id="tsparticles"
//         particlesLoaded={particlesLoaded as any}
//         options={options as any}
//       />
//     );
//   }
//   console.log("Not yet initialized. Rendering placeholder.");
//   return <></>;
// };

// export default Animation;
