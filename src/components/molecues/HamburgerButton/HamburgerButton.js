import React from 'react';
import HamburgerBg from 'assets/svg/hamburger.svg';
import { Button } from './HamburberButton.style';

const HamburgerButton = () => (
  <Button>
    <HamburgerBg />
    <div />
  </Button>
);

export default HamburgerButton;
