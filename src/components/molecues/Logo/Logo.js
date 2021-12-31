import React from 'react';
import { LogoWrapper, StyledSvgLogo } from './Logo.style';

const Logo = () => (
  <LogoWrapper to="/">
    <StyledSvgLogo />
    <h1>Jellyfox Studio</h1>
  </LogoWrapper>
);

export default Logo;
