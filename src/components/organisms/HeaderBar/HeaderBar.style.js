import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  transform: ${({ isHidden }) =>
    isHidden ? 'translateY(-120%)' : 'translateY(0)'};
  justify-content: space-between;
  box-shadow: ${({ scrollVersion }) =>
    scrollVersion
      ? '0px 0px 15px 0px rgba(0, 0, 0, 0.4)'
      : '0px 0px 15px 0px rgba(0, 0, 0, 0)'};
  background: ${({ theme, scrollVersion }) =>
    scrollVersion ? theme.colors.bg.white : 'transparent'};
  padding: ${({ scrollVersion }) =>
    scrollVersion ? '0.7rem 0rem 0.7rem 2rem' : '1rem 0 .5rem 3rem'};
  transition: padding 0.3s ease-in, transform 0.3s ease-in;
`;
