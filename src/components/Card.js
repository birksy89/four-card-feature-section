import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  font-family: "Poppins";
  font-weight: ${props => (props.light ? "200" : "600")};
  color: ${props => props.fg};
`;

export default function Card() {
  return <StyledCard>dd</StyledCard>;
}
