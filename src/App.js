import React from "react";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  max-width: 100%; /* added to fix scrollbar issue*/
  background-color: hsl(0, 0%, 98%);
`;

function App() {
  return (
    <StyledWrapper>
      <p>
        Reliable, efficient delivery Powered by Technology Our Artificial
        Intelligence powered tools use millions of project data points to ensure
        that your project is successful Supervisor Monitors activity to identify
        project roadblocks Team Builder Scans our talent network to create the
        optimal team for your project Karma Regularly evaluates our talent to
        ensure quality Calculator Uses data from past projects to provide better
        delivery estimates
      </p>
    </StyledWrapper>
  );
}

export default App;
