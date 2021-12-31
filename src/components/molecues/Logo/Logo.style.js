import styled from 'styled-components';
import SvgLogo from 'assets/svg/foxlogo.svg';
import { Link } from 'gatsby';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;

  h1{
    margin-left: 1.2rem;
    font-size: ${({ theme }) => theme.fontSize.mobile.xxs};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.text.purple};
    text-transform: uppercase;
  }
`;

export const StyledSvgLogo = styled(SvgLogo)`
  width: 4.2rem;
  height: 4.5rem;

  path{
    fill: ${({ theme }) => theme.colors.bg.purple};
  }
`;
