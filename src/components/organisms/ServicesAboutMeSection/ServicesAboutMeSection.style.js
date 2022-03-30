import styled from 'styled-components';
import { ViewTemplate } from 'components/templates/ViewTemplate/ViewTemplate';
import wavesMobile from 'assets/svg/wavesMobile.svg';
import ArrowScrollDown from 'assets/svg/arowscrolldown.component.svg';

export const StyledViewTemplate = styled(ViewTemplate)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg.purple};
  touch-action: cross-slide-y;
`;

export const WavesMobile = styled.div`
  position: absolute;
  top: 0;
  left: -100vw;
  width: 400vw;
  height: 6.5rem;
  transform: translate(0px, -100%);
  background: url(${wavesMobile}) repeat-x transparent;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: ${({ heightSize }) => `${heightSize}px`};
  background-color: transparent;
`;

export const Title = styled.h3`
  margin-top: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.mobile.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text.white};
`;

export const Paragraph = styled.p`
  margin-top: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.mobile.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.text.white};
  line-height: 1.5;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  width: 100%;

  svg {
    margin-bottom: 2rem;
  }
`;

export const SlideToHappyClientsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem 0 3rem 0;
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mobile.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.text.white};
  text-align: center;
  line-height: 1.5;
`;

export const StyledArrow = styled(ArrowScrollDown)`
  margin-top: 1rem;

  path {
    stroke: ${({ theme }) => theme.colors.bg.white};
  }
`;
