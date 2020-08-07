import React, { Component } from "react";
import { StyledParticles } from "./Styles";

export default class Canvas extends Component {
  state = { mounted: false };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    if (this.state.mounted) {
      return (
        <StyledParticles
          {...this.state}
          params={{
            particles: {
              number: {
                value: 35,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: ["#ff4a4a", "#ff6b4a", "#ff954a", "#ffab4a"],
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                image: {
                  src: "../../../assets/VertexLogo.png",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.4,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable_auto: true,
                distance: 150,
                color: {
                  value: ["#ff4a4a", "#ff6b4a", "#ff954a", "#ffab4a"],
                },
                opacity: 1,
                width: 1,
                condensed_mode: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                },
                onclick: {
                  enable: false,
                },
                resize: true,
              },
            },
            retina_detect: true,
          }}
        />
      );
    } else {
      return "";
    }
  }
}
