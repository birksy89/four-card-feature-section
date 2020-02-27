import React from "react";
import styled from "@emotion/styled";

const Heading = styled("h1")`
  font-weight: ${props => (props.light ? "100" : "800")};
  color: ${props => props.fg};
`;

export default function Title(props) {
  return <Heading {...props}>{props.text}</Heading>;
}
