import styled, { css } from 'styled-components';

const mixinPseudoEl = css`
  content: '';
  display: block;
  position: absolute;
  left: 0;
  width: 2rem;
  height: 1px;
  background-color: ${({ theme, scrollVersion, isOpen }) => {
    if (scrollVersion || isOpen) {
      return theme.colors.bg.black;
    }
    return theme.colors.bg.white;
  }};

  transition: transform 0.2s 0.1s ease-in, top 0.2s ease-in;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3000;
  width: 5rem;
  height: ${({ scrollVersion }) => (scrollVersion ? '4rem' : '10rem')};
  border: none;
  background: transparent;
  cursor: pointer;

  div {
    position: relative;
    left: ${({ scrollVersion }) =>
      scrollVersion ? 'calc(50% + 5px)' : 'calc(50% + 17px)'};
    top: 0;
    width: ${({ isOpen }) => (isOpen ? '0rem' : '1.4rem')};
    transform: rotate(-180deg);
    transform-origin: left;
    height: 1px;
    background-color: ${({ theme, scrollVersion }) =>
      scrollVersion ? theme.colors.bg.black : theme.colors.bg.white};
    transition: width 0.2s ease-in;
  }

  div::before {
    ${mixinPseudoEl};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
    top: ${({ isOpen }) => (isOpen ? '0px' : '-5px')};
  }

  div::after {
    ${mixinPseudoEl};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0deg)')};
    top: ${({ isOpen }) => (isOpen ? '0px' : '5px')};
  }

  svg {
    position: absolute;
    top: 0;
    left: 2px;
    z-index: -1;
    width: 5rem;
    height: 10rem;

    path {
      transition: fill 0.2s 0.1s ease-in;
      fill: ${({ theme, isOpen }) =>
        isOpen ? theme.colors.bg.white : theme.colors.bg.purple};
    }
  }
`;
