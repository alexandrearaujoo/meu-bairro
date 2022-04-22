import styled from "styled-components";

interface ButtonProps {
  background?: string
  borderColor?: string
  color?: string
  width?: string
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.background};
  border: 0;
  width: ${props => props.width};
  max-width: 350px;
  height: 35px;
  transition: 0.5s;
  border-radius: 6px;
  border: 2px solid;
  border-color: ${props => props.borderColor};
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: bold;
  letter-spacing: 1px;
`