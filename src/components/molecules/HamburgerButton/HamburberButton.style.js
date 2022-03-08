import styled, { css } from 'styled-components';
import hamburger from 'assets/svg/hamburger.svg';

const mixinPseudoEl = css`
  content: '';
  display: block;
  position: absolute;
  left: -6px;
  width: 2rem;
  height: 1px;
  background-color: ${({ theme, scrollVersion }) =>
    scrollVersion ? theme.colors.bg.black : theme.colors.bg.white};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  width: 5rem;
  height: ${({ scrollVersion }) => (scrollVersion ? '4rem' : '10rem')};
  border: none;
  background: transparent;
  cursor: pointer;
  background: ${({ scrollVersion }) =>
    scrollVersion ? 'transparent' : `url(${hamburger})`};
  background-size: 100%;

  div {
    position: relative;
    left: ${({ scrollVersion }) =>
      scrollVersion ? 'calc(50% - 8px)' : 'calc(50%)'};
    top: 1px;
    width: 1.4rem;
    height: 1px;
    background-color: ${({ theme, scrollVersion }) =>
      scrollVersion ? theme.colors.bg.black : theme.colors.bg.white};
  }

  div::before {
    ${mixinPseudoEl};
    top: -5px;
  }

  div::after {
    ${mixinPseudoEl};
    top: 5px;
  }

  svg {
    width: 3.3rem;
    height: 7rem;
  }
`;
