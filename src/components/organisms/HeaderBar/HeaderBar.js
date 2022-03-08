import React from 'react';
import Logo from 'components/molecules/Logo/Logo';
import HamburgerButton from 'components/molecules/HamburgerButton/HamburgerButton';
import { Wrapper } from './HeaderBar.style';

const HeaderBar = () => (
  <Wrapper>
    <Logo />
    <HamburgerButton />
  </Wrapper>
);

export default HeaderBar;
