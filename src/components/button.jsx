import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 1px solid gray;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: blue;
    color: white;
  `}
  ${props => props.dashed && css`
    border: 1px dashed gray;
  `}
  ${props => props.text && css`
    border: none;
  `}
  ${props => props.link && css`
    border: none;
    color: blue;
  `}
`;

export default Button;