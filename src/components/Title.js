import React from "react";
import styled from "@emotion/styled";

const Heading = styled("h1")`
  font-family: "Poppins";
  text-align: center;
  color: hsl(234, 12%, 34%);
  font-weight: ${props => (props.light ? "200" : "600")};
`;

export default function Title(props) {
  return <Heading {...props}>{props.text}</Heading>;
}
