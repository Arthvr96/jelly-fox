import React from 'react';
import PropTypes from 'prop-types';
import SvgLogo from 'assets/svg/foxlogo.component.svg';
import { useGlobalState } from 'providers/GlobalStateProvider/GlobalStateProvider';
import { LogoWrapper, Wrapper } from './Logo.style';

const Logo = ({ scrollVersion, isOpen }) => {
  const { setIsOpen } = useGlobalState();
  return (
    <LogoWrapper to="/" onClick={() => setTimeout(() => setIsOpen(false), 200)}>
      <Wrapper isOpen={isOpen} scrollVersion={scrollVersion}>
        <SvgLogo />
        <h1>Jellyfox Studio</h1>
      </Wrapper>
    </LogoWrapper>
  );
};

export default Logo;

Logo.propTypes = {
  scrollVersion: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
