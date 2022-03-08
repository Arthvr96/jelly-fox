import styled from 'styled-components';
import SvgLogo from 'assets/svg/foxlogo.component.svg';
import { Link } from 'gatsby';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.mobile.xxs};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.purple};
    text-transform: uppercase;
  }
`;

export const StyledSvgLogo = styled(SvgLogo)`
  width: ${({ scrollVersion }) => (scrollVersion ? '2.8rem' : '4.2rem')};
  height: ${({ scrollVersion }) => (scrollVersion ? '3rem' : '4.5rem')};
  transition: height 0.3s ease-in, width 0.3s ease-in;

  path {
    fill: ${({ theme }) => theme.colors.bg.purple};
  }
`;
