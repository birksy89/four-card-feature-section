import React from "react";
import styled from "@emotion/styled";
import calculator from "../images/icon-calculator.svg";

const StyledCard = styled.div`
  font-family: "Poppins";
  background-color: #fff;
  border-radius: 15px;

  overflow: hidden;
`;
const StyledStripe = styled.div`
  background-color: red;
  height: 15px;
  width: 100%;
`;
const TextWrapper = styled.div`
  margin: 15px;
`;

export default function Card({ title, children }) {
  return (
    <StyledCard>
      <StyledStripe />
      <TextWrapper>
        <h3>{title}</h3>
        <div>{children}</div>
        <img src={calculator} />
      </TextWrapper>
    </StyledCard>
  );
}
