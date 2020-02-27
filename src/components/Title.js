import React from "react";
import styled from "@emotion/styled";

const Heading = styled("h1")`
  background-color: ${props => props.bg};
  color: ${props => props.fg};
`;

export default function Title({ text, as }) {
  return <Heading as={as}>{text}</Heading>;
}
