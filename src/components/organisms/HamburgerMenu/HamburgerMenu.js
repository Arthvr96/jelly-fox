import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import behance from 'assets/svg/behance.svg';
import instagram from 'assets/svg/instagram.svg';
import facebook from 'assets/svg/facebook.svg';
import email from 'assets/svg/email.svg';
import { useGlobalState } from 'providers/GlobalStateProvider/GlobalStateProvider';
import { gsap } from 'gsap';
import { theme } from 'theme/theme';
import {
  Wrapper,
  NavWrapper,
  SocialWrapper,
  SocialItem,
  StyledLink,
} from './HamburgerMenu.style';

const navLinks = [
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
  ['Shop (soon)', '/shop'],
];

const socials = [
  ['Behance', 'https://www.behance.net/', behance, '0% 60%'],
  ['Instagram', 'https://www.instagram.com/', instagram, '0% 50%'],
  ['Facebook', 'https://www.facebook.com/', facebook, '0% 55%'],
];

const HamburgerMenu = ({ isOpen }) => {
  const wrapperRef = useRef();
  const { setIsOpen } = useGlobalState();
  const { currentRoute, prevRoute } = useGlobalState();

  const getBgColor = (routeName) => {
    let bg;
    if (routeName === '/home' || routeName === '/about') {
      bg = 'purple';
    } else if (routeName === '/projects') {
      bg = 'yellow';
    } else if (routeName === '/contact') {
      bg = 'red';
    } else if (routeName === '/shop') {
      bg = 'pink';
    } else {
      bg = 'purple';
    }
    return bg;
  };

  useEffect(() => {
    if (prevRoute !== currentRoute) {
      const tl = gsap.timeline();
      tl.set(wrapperRef.current, {
        background: theme.colors.bg[getBgColor(prevRoute)],
      }).to(wrapperRef.current, {
        background: theme.colors.bg[getBgColor(currentRoute)],
        duration: 0.5,
      });
    }
  }, [currentRoute, prevRoute]);

  return (
    <Wrapper ref={wrapperRef} isOpen={isOpen}>
      <nav>
        <NavWrapper>
          {navLinks.map((link) => (
            <li key={link[0]}>
              <StyledLink
                activeClassName="active"
                to={link[1]}
                onClick={() => setTimeout(() => setIsOpen(false), 200)}
              >
                {link[0]}
              </StyledLink>
            </li>
          ))}
        </NavWrapper>
        <SocialWrapper>
          {socials.map((social) => (
            <li key={social[0]}>
              <SocialItem
                target="_blank"
                imgSrc={social[2]}
                imgPosition={social[3]}
                href={social[1]}
              >
                {social[0]}
              </SocialItem>
            </li>
          ))}
          <li>
            <SocialItem imgSrc={email} imgPosition="0% 55%" as="span">
              hello@jellyfox.studio
            </SocialItem>
          </li>
        </SocialWrapper>
      </nav>
    </Wrapper>
  );
};

export default HamburgerMenu;

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
