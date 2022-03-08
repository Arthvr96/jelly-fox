import styled from 'styled-components';
import SvgLogo from 'assets/svg/foxlogo.component.svg';
import { Link } from 'gatsby';

export const LogoWrapper = styled(Link)`
  display: flex;

  h1 {
    margin-left: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.mobile.xxs};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.purple};
    text-transform: uppercase;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: ${({ scrollVersion }) => (scrollVersion ? '3.5rem' : '4.2rem')};
    height: ${({ scrollVersion }) => (scrollVersion ? '3.3rem' : '4.5rem')};
  }
`;

export const StyledSvgLogo = styled(SvgLogo)`
  transition: height 0.3s ease-in, width 0.3s ease-in;

  path {
    fill: ${({ theme }) => theme.colors.bg.purple};
  }
`;
