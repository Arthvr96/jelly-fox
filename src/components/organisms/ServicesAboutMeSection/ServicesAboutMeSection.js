import React, { useRef } from 'react';
import styled from 'styled-components';
import wavesMobile from 'assets/svg/wavesMobile.svg';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useWindowSize } from 'hooks/useWindowSize';
import ViewTemplate from 'components/templates/ViewTemplate/ViewTemplate';

const Placeholder = styled.div`
  width: 100%;
  height: ${({ heightSize }) => `${heightSize}px`};
  background-color: transparent;
`;

const WavesMobile = styled.div`
  position: absolute;
  top: 0;
  left: -100vw;
  width: 400vw;
  height: 6.5rem;
  transform: translate(0px, -100%);
  background: url(${wavesMobile}) repeat-x transparent;
`;

const ServicesAboutMeSection = () => {
  const { height } = useWindowSize();
  const wavesMobileRef = useRef();

  useScrollPosition(({ currPos }) => {
    if (-currPos.y < 1000) {
      wavesMobileRef.current.style.transform = `translate(${Math.floor(
        -currPos.y / 3,
      )}px , -100%`;
    }
  }, []);

  return (
    <>
      <Placeholder heightSize={height} />
      <ViewTemplate heightSize="300vh" bg="purple" position="relative">
        <WavesMobile ref={wavesMobileRef} />
      </ViewTemplate>
    </>
  );
};
export default ServicesAboutMeSection;
