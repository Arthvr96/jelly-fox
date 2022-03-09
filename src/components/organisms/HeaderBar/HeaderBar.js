import React, { useMemo, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Logo from 'components/molecules/Logo/Logo';
import HamburgerButton from 'components/molecules/HamburgerButton/HamburgerButton';
import { Wrapper } from './HeaderBar.style';

const HeaderBar = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [scrollVersion, setScrollVersion] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (-currPos.y > window.innerHeight / 2) {
        setScrollVersion(true);
      } else {
        setScrollVersion(false);
      }
      if (-currPos.y > window.innerHeight - 100) {
        const isShow = currPos.y > prevPos.y;
        if (isShow !== hideOnScroll) setHideOnScroll(isShow);
      }
    },
    [hideOnScroll],
    null,
    false,
  );

  return useMemo(
    () => (
      <Wrapper isHidden={!hideOnScroll} scrollVersion={scrollVersion}>
        <Logo scrollVersion={scrollVersion} />
        <HamburgerButton scrollVersion={scrollVersion} />
      </Wrapper>
    ),
    [hideOnScroll, scrollVersion],
  );
};

export default HeaderBar;
