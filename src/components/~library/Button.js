import styled, { css } from "styled-components";
import * as color from "../../styled/colors";

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
      color: ${color.buttonDangerText};
      border-color: ${color.buttonDefaultBorder};
      background-color: ${color.buttonDefaultBackground};
    font-weight: normal;

  ${props =>
    props.primary &&
    css`
      color: ${color.buttonPrimaryText};
      border-color: ${color.buttonPrimaryBorder};
      background-color: ${color.buttonPrimaryBackground};
    `}

  ${props =>
    props.danger &&
    css`
      color: ${color.buttonDangerText};
      border-color: ${color.buttonDangerBorder};
      background-color: ${color.buttonDangerBackground};
    `}

  ${props =>
    props.disabled &&
    css`
      color: ${color.buttonDisabledText};
      border-color: ${color.buttonDisabledBorder};
      background-color: ${color.buttonDisabledBackground};
    `}

  ${props =>
    props.large &&
    css`
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `}
    
  ${props =>
    props.small &&
    css`
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
    `}

  ${props =>
    props.next &&
    css`
      &::after {
        content: "\\02192";
        display: inline-block;
        font-size: 2rem;
        vertical-align: middle;
      }
    `}
  `;

export default Button;
