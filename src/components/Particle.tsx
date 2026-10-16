// https://dev.to/rahulchaudhary/implementing-react-tsparticles-in-website-5202

import React, { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import particlesConfig from "../../particles.json" with { type: "json" };

const Particle = () => {
  const initParticles = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <ParticlesProvider init={initParticles}>
        <Particles
          id="tsparticles"
          className="bg-yellow-500
                     w-screen h-screen fixed top-0 left-0"
          style={{
            zIndex: -1,
          }}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "repulse",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#bae6fd",
              },
              links: {
                color: "#e0f2fe",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 160,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "edge",
              },
              size: {
                value: { min: 1, max: 2 },
              },
            },
            detectRetina: true,
          }}
        />
    </ParticlesProvider>
  );
}

export default Particle;