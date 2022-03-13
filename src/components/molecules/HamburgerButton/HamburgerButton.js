import React from 'react';
import PropTypes from 'prop-types';
import ButtonBg from 'assets/svg/hamburger.component.svg';
import { Button } from './HamburberButton.style';

const HamburgerButton = ({ scrollVersion, onClick, isOpen }) => {
  return (
    <Button
      type="button"
      isOpen={isOpen}
      onClick={onClick}
      scrollVersion={scrollVersion}
    >
      <div />
      {scrollVersion ? null : <ButtonBg className="test" />}
    </Button>
  );
};

export default HamburgerButton;

HamburgerButton.propTypes = {
  scrollVersion: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
