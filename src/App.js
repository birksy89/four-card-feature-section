import React from "react";
import styled from "@emotion/styled";
import Title from "./components/Title";
import Card from "./components/Card";
import "typeface-poppins";

const AppContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 2rem;
`;
const GridSetup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

const StyledParagraph = styled.p`
  font-family: "Poppins";
  text-align: center;
  color: hsl(229, 6%, 66%);
  max-width: 540px;
  margin: auto;
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
        <div>
          <Card title="Supervisor">
            Monitors activity to identify project roadblocks
          </Card>
        </div>

        <div>
          <Card title="Team Builder">
            Scans our talent network to create the optimal team for your project
          </Card>
          <Card title="Karma">
            Regularly evaluates our talent to ensure quality
          </Card>
        </div>

        <div>
          <Card title="Calculator">
            Uses data from past projects to provide better delivery estimates
          </Card>
        </div>
      </GridSetup>

      <p></p>
    </AppContainer>
  );
}

export default App;
