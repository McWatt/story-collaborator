import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: ${props => props.color || "white"};
  font-weight: bold;

  &:visited {
    color: ${props => props.color || "white"};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
