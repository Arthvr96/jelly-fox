import styled from 'styled-components';
import { Link } from 'gatsby';

export const LogoWrapper = styled(Link)`
  display: flex;
  position: relative;
  z-index: 3000;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.mobile.xxs};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.text.white : theme.colors.text.purple};
    text-transform: uppercase;
    transition: color 0.3s 0.1s ease-in-out;
  }

  svg {
    width: ${({ scrollVersion }) => (scrollVersion ? '3.5rem' : '4.2rem')};
    height: ${({ scrollVersion }) => (scrollVersion ? '3.3rem' : '4.5rem')};
    transition: height 0.3s ease-in, width 0.3s ease-in;

    path {
      transition: ${({ isOpen }) =>
        isOpen ? 'fill 0.3s 0.2s ease-in-out' : 'fill 0.3s 0.05s ease-in-out'};
      fill: ${({ theme, isOpen }) =>
        isOpen ? theme.colors.bg.white : theme.colors.bg.purple};
    }
  }
`;
