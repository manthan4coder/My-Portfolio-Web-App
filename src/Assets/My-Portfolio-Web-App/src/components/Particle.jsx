import Particles from "react-tsparticles";

function Particle() {
  return (
    // My Default Particles :
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />

    // Colliding Particles
    // <Particles
    //   id="tsparticles"
    //   options={{
    //     particles: {
    //       number: {
    //         value: 100,
    //         density: {
    //           enable: true,
    //           value_area: 800,
    //         },
    //       },
    //       color: {
    //         value: "#ffffff",
    //         // value: "#101010",
    //       },
    //       shape: {
    //         type: "circle",
    //         stroke: {
    //           width: 0,
    //           color: "#000000",
    //         },
    //         polygon: {
    //           nb_sides: 5,
    //         },
    //       },
    //       size: {
    //         value: 3,
    //         random: true,
    //         anim: {
    //           enable: false,
    //           speed: 40,
    //           size_min: 0.1,
    //           sync: false,
    //         },
    //       },
    //       move: {
    //         enable: true,
    //         speed: 4,
    //         direction: "none",
    //         random: false,
    //         straight: false,
    //         out_mode: "out",
    //         bounce: false,
    //         attract: {
    //           enable: false,
    //           rotateX: 600,
    //           rotateY: 1200,
    //         },
    //       },
    //       // background: {
    //       //   color: {
    //       //     value: "#000000",
    //       //   },
    //       // },
    //     },
    //     interactivity: {
    //       detect_on: "canvas",
    //       events: {
    //         onhover: {
    //           enable: true,
    //           mode: "repulse",
    //         },
    //         onclick: {
    //           enable: true,
    //           mode: "push",
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         grab: {
    //           distance: 400,
    //           line_linked: {
    //             opacity: 1,
    //           },
    //         },
    //         bubble: {
    //           distance: 400,
    //           size: 40,
    //           duration: 2,
    //           opacity: 8,
    //           speed: 3,
    //         },
    //         repulse: {
    //           distance: 200,
    //           duration: 0.4,
    //         },
    //         push: {
    //           particles_nb: 4,
    //         },
    //         remove: {
    //           particles_nb: 2,
    //         },
    //       },
    //     },
    //     retina_detect: true,
    //   }}
    // />

    // Too much big Static-Particles
    // <Particles
    //   id="tsparticles"
    //   options={{
    //     particles: {
    //       number: {
    //         value: 160,
    //         density: {
    //           enable: false,
    //         },
    //       },
    //       size: {
    //         value: 3,
    //         random: true,
    //         anim: {
    //           speed: 4,
    //           size_min: 0.3,
    //         },
    //       },
    //       line_linked: {
    //         enable: false,
    //       },
    //       move: {
    //         random: true,
    //         speed: 1,
    //         direction: "top",
    //         out_mode: "out",
    //       },
    //     },
    //     interactivity: {
    //       events: {
    //         onhover: {
    //           enable: true,
    //           mode: "bubble",
    //         },
    //         onclick: {
    //           enable: true,
    //           mode: "repulse",
    //         },
    //       },
    //       modes: {
    //         bubble: {
    //           distance: 250,
    //           duration: 2,
    //           size: 0,
    //           opacity: 0,
    //         },
    //         repulse: {
    //           distance: 400,
    //           duration: 4,
    //         },
    //       },
    //     },
    //   }}
    // />

    // Too much big Static-Particles
    // <Particles
    //   id="tsparticles"
    //   params={{
    //     particles: {
    //       number: {
    //         value: 50,
    //       },
    //       size: {
    //         value: 3,
    //       },
    //     },
    //     interactivity: {
    //       events: {
    //         onhover: {
    //           enable: true,
    //           mode: "repulse",
    //         },
    //       },
    //     },
    //   }}
    // />
  );
}

export default Particle;
