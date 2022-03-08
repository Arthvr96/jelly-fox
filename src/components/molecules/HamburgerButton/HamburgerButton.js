import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './HamburberButton.style';

const HamburgerButton = ({ scrollVersion }) => (
  <Button scrollVersion={scrollVersion}>
    <div />
  </Button>
);

export default HamburgerButton;

HamburgerButton.propTypes = {
  scrollVersion: PropTypes.bool.isRequired,
};
