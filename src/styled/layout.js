import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 2rem 1rem;
  background-image: linear-gradient(
    to right,
    rgb(29, 17, 83),
    rgb(42, 66, 107)
  );
`;

export const StyledBody = styled.div`
  display: block;
`;

export const StyledSidebar = styled.aside`
  height: 600px;
  overflow: scroll;
  overflow-x: hidden;
  flex: 0 0 35%;
`;

export const StyledContent = styled.section`
  display: block;
  padding: 1em;
`;
