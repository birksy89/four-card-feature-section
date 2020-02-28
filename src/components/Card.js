import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  font-family: "Poppins";
  background-color: #fff;
  border-radius: 5px;
  margin: 30px;
  overflow: hidden;
`;
const StyledStripe = styled.div`
  background-color: ${props => props.color};
  height: 5px;
  width: 100%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px;

  h3 {
    margin-top: 0;
  }

  img {
    align-self: flex-end;
  }
`;

export default function Card({ title, color = "#ccc", svgImage, children }) {
  return (
    <StyledCard>
      <StyledStripe color={color} />
      <TextWrapper>
        <h3>{title}</h3>
        <p>{children}</p>
        <img alt="" src={svgImage} />
      </TextWrapper>
    </StyledCard>
  );
}
