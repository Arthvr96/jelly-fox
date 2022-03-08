import React from 'react';
import { ViewTemplate } from 'components/templates/ViewTemplate/ViewTemplate';
import styled from 'styled-components';
import wavesMobile from 'assets/svg/wavesMobile.svg';
import { useWindowSize } from '../../../hooks/useWindowSize';

const StyledViewTemplate = styled(ViewTemplate)`
  transform: ${({ height }) => `translateY(${height}px)`};
  min-height: 300vh;
  background-color: ${({ theme }) => theme.colors.bg.purple};
`;

const WavesMobile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6.5rem;
  transform: translateY(-100%);
  background: url(${wavesMobile}) transparent;
  background-size: 100%;
`;

const ServicesAboutMeSection = () => {
  const { height } = useWindowSize();
  return (
    <StyledViewTemplate height={height}>
      <WavesMobile />
    </StyledViewTemplate>
  );
};
export default ServicesAboutMeSection;
