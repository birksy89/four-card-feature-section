import React from "react";
import styled from "@emotion/styled";

const StyledCard = styled.div`
  font-family: "Poppins";
  background-color: #fff;
  border-radius: 5px;
  margin: 30px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.15);
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

  p {
    color: #a9a9ab;
    margin-top: 0;
    margin-bottom: 40px;
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
