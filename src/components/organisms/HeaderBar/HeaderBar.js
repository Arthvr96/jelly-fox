import React from 'react';
import Logo from 'components/molecues/Logo/Logo';
import HamburgerButton from 'components/molecues/HamburgerButton/HamburgerButton';
import { Wrapper } from './HeaderBar.style';

const HeaderBar = () => (
  <Wrapper>
    <Logo />
    <HamburgerButton />
  </Wrapper>
);

export default HeaderBar;
