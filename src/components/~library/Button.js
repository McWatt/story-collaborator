import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}

  ${props => props.disabled && css`
    background: rgb(200, 200, 200);
    color: rgb(150, 150, 150);
    border: 2px solid rgb(200, 200, 200);
  `}
`;

export default Button;