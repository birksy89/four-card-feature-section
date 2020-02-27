import React from "react";
import styled from "@emotion/styled";

const Heading = styled("h1")`
  font-family: "Poppins";
  font-weight: ${props => (props.light ? "200" : "600")};
`;

export default function Title(props) {
  return <Heading {...props}>{props.text}</Heading>;
}
