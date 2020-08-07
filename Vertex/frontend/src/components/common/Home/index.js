import React, { Component } from "react";
import StyledParticles from "./Particles";
import { HomeWrapper, Heading, Button } from "./Styles";

export class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <StyledParticles />
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-6 text-center">
              <h1 className="mb-4">
                <Heading>Vertex</Heading>
                An intersection of project management tools
              </h1>
              <p>
                <Button to="/login" className="btn">
                  Log in
                </Button>
              </p>
            </div>
          </div>
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
