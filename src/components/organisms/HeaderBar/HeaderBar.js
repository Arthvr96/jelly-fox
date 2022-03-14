import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Logo from 'components/molecules/Logo/Logo';
import HamburgerButton from 'components/molecules/HamburgerButton/HamburgerButton';
import { useGlobalState } from 'providers/GlobalStateProvider';
import { Wrapper } from './HeaderBar.style';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const HeaderBar = () => {
  const { isOpen, setIsOpen } = useGlobalState();
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [scrollVersion, setScrollVersion] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isOpen) {
        if (-currPos.y > window.innerHeight / 2 - 100) {
          setScrollVersion(true);
        } else {
          setScrollVersion(false);
        }
        if (-currPos.y > window.innerHeight / 2 - 100) {
          const isShow = currPos.y > prevPos.y;
          if (isShow !== hideOnScroll) setHideOnScroll(isShow);
        }
      }
    },
    [hideOnScroll, isOpen],
    null,
    false,
  );

  const handleClick = (target) => {
    setIsOpen(target);

    if (target) {
      setScrollVersion(false);
    }
    if (!target && window.scrollY > window.innerHeight / 2 - 100) {
      setScrollVersion(true);
    } else if (!target && window.scrollY <= window.innerHeight / 2 - 100) {
      setScrollVersion(false);
    }
  };

  return (
    <Wrapper isHidden={!hideOnScroll} scrollVersion={scrollVersion}>
      <Logo scrollVersion={scrollVersion} isOpen={isOpen} />
      <HamburgerButton
        scrollVersion={scrollVersion}
        onClick={() => handleClick(!isOpen)}
        isOpen={isOpen}
      />
      <HamburgerMenu isOpen={isOpen} />
    </Wrapper>
  );
};

export default HeaderBar;
