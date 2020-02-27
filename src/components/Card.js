import React from "react";
import styled from "@emotion/styled";
import calculator from "../images/icon-calculator.svg";

const StyledCard = styled.div`
  font-family: "Poppins";
`;

export default function Card({ title, children }) {
  return (
    <StyledCard>
      <h3>{title}</h3>
      {children}
      <img src={calculator} />
    </StyledCard>
  );
}
