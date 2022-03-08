import styled, { css } from 'styled-components';
import hamburger from 'assets/svg/hamburger.svg';

const mixinPseudoEl = css`
  content: '';
  display: block;
  position: absolute;
  left: -4px;
  width: 1.3rem;
  height: 1px;
  background-color: ${({ theme, scrollVersion }) =>
    scrollVersion ? theme.colors.bg.black : theme.colors.bg.white};
`;

export const Button = styled.button`
  position: relative;
  width: 3.3rem;
  height: ${({ scrollVersion }) => (scrollVersion ? '3rem' : '7rem')};
  border: none;
  background: transparent;
  cursor: pointer;
  background: ${({ scrollVersion }) =>
    scrollVersion ? 'transparent' : `url(${hamburger})`};
  transition: height 0.3s ease-in;

  div {
    position: absolute;
    top: 50%;
    left: calc(50% + 4px);
    transform: translate(-50%, -50%);
    width: 0.9rem;
    height: 1px;
    background-color: ${({ theme, scrollVersion }) =>
      scrollVersion ? theme.colors.bg.black : theme.colors.bg.white};
  }

  div::before {
    ${mixinPseudoEl};
    top: -4px;
  }

  div::after {
    ${mixinPseudoEl};
    top: 4px;
  }

  svg {
    width: 3.3rem;
    height: 7rem;
  }
`;
