import React from "react";
import styled from "@emotion/styled";
import Title from "./components/Title";
import Card from "./components/Card";
import "typeface-poppins";

import calculator from "./images/icon-calculator.svg";
import supervisor from "./images/icon-supervisor.svg";
import teamBuilder from "./images/icon-team-builder.svg";
import karma from "./images/icon-karma.svg";

const AppContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 2rem;
`;
const GridSetup = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: none;

    grid-template-areas:
      "a b1 c"
      "a b2 c";

    align-items: center;

    div:nth-of-type(1) {
      grid-area: a;
    }
    div:nth-of-type(2) {
      grid-area: b1;
    }
    div:nth-of-type(3) {
      grid-area: b2;
    }
    div:nth-of-type(4) {
      grid-area: c;
    }
  }
`;

const StyledParagraph = styled.p`
  font-family: "Poppins";
  text-align: center;
  color: hsl(229, 6%, 66%);
  max-width: 540px;
  margin: 1rem auto;
`;

function App() {
  return (
    <AppContainer>
      <Title as="h1" light text="Reliable, efficient delivery" />
      <Title as="h2" text="Powered by Technology" />

      <StyledParagraph>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </StyledParagraph>

      <GridSetup>
        <Card color="#40d5d3" title="Supervisor" svgImage={supervisor}>
          Monitors activity to identify project roadblocks
        </Card>

        <Card color="#ea5551" title="Team Builder" svgImage={teamBuilder}>
          Scans our talent network to create the optimal team for your project
        </Card>
        <Card color="#fcae4a" title="Karma" svgImage={karma}>
          Regularly evaluates our talent to ensure quality
        </Card>

        <Card color="#519ff2" title="Calculator" svgImage={calculator}>
          Uses data from past projects to provide better delivery estimates
        </Card>
      </GridSetup>

      <p></p>
    </AppContainer>
  );
}

export default App;
