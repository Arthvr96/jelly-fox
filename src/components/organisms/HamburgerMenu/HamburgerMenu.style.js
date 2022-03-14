import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 10rem 3rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.4s ease-in-out;
`;

export const NavWrapper = styled.ul`
  width: fit-content;
  list-style: none;
  margin: 0 auto;

  li {
    margin-top: 1.5rem;
  }

  li:first-child {
    margin-top: 0;
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.mobile.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text.white};

  &.active {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const SocialWrapper = styled.ul`
  list-style: none;
  width: fit-content;
  transform: translateY(5rem);

  li {
    margin-bottom: 1.5rem;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

export const SocialItem = styled.a`
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.return};
  color: ${({ theme }) => theme.colors.text.white};
  background: ${({ imgSrc, imgPosition }) =>
    `url(${imgSrc}) ${imgPosition} no-repeat`};
  background-size: 15px;

  padding-left: 4.5rem;
`;
