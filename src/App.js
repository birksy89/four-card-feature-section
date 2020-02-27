import React from "react";
import styled from "@emotion/styled";
import Title from "./components/Title";

const StyledWrapper = styled.div``;

function App() {
  return (
    <StyledWrapper is>
      <Title as="h1" light text="Reliable, efficient delivery" />
      <Title as="h2" text="Powered by Technology" />

      <p>
        Reliable, efficient delivery Powered by Technology Our Artificial
        Intelligence powered tools use millions of project data points to ensure
        that your project is successful
      </p>
      <p>
        Supervisor Monitors activity to identify project roadblocks Team Builder
        Scans our talent network to create the optimal team for your project
        Karma Regularly evaluates our talent to ensure quality Calculator Uses
        data from past projects to provide better delivery estimates
      </p>
    </StyledWrapper>
  );
}

export default App;
