import React from 'react';
import PropTypes from 'prop-types';
import { LogoWrapper, StyledSvgLogo } from './Logo.style';

const Logo = ({ scrollVersion }) => (
  <LogoWrapper to="/">
    <StyledSvgLogo scrollVersion={scrollVersion} />
    <h1>Jellyfox Studio</h1>
  </LogoWrapper>
);

export default Logo;

Logo.propTypes = {
  scrollVersion: PropTypes.bool.isRequired,
};
