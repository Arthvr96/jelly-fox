import React from 'react';
import PropTypes from 'prop-types';
import { LogoWrapper, StyledSvgLogo, Wrapper } from './Logo.style';

const Logo = ({ scrollVersion }) => (
  <LogoWrapper to="/">
    <Wrapper scrollVersion={scrollVersion}>
      <StyledSvgLogo />
      <h1>Jellyfox Studio</h1>
    </Wrapper>
  </LogoWrapper>
);

export default Logo;

Logo.propTypes = {
  scrollVersion: PropTypes.bool.isRequired,
};
