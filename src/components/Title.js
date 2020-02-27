import React from "react";
import styled from "@emotion/styled";
import "typeface-poppins";

const Heading = styled("h1")`
  font-family: "Poppins";
  font-weight: ${props => (props.light ? "200" : "600")};
  color: ${props => props.fg};
`;

export default function Title(props) {
  return <Heading {...props}>{props.text}</Heading>;
}
