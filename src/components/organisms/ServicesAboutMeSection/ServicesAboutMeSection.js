import React, { useRef } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useWindowSize } from 'hooks/useWindowSize';
import AboutMe1 from 'assets/svg/aboutMe1.component.svg';
import DecorsTop from 'assets/svg/aboutMeSection/decorsTop.component.svg';
import Illustrations from 'assets/svg/aboutMeSection/illustrations.component.svg';
import GraphicDesign from 'assets/svg/aboutMeSection/graphicDesign.component.svg';
import Pakeging from 'assets/svg/aboutMeSection/pakeging.component.svg';
import PublicationsDesign from 'assets/svg/aboutMeSection/publicationsDesign.component.svg';
import Branding from 'assets/svg/aboutMeSection/branding.component.svg';
import WebDesign from 'assets/svg/aboutMeSection/webDesign.component.svg';
import {
  Placeholder,
  StyledViewTemplate,
  StyledParagraph,
  WavesMobile,
  Title,
  Paragraph,
  ServicesWrapper,
  SlideToHappyClientsSection,
  StyledArrow,
} from './ServicesAboutMeSection.style';

const ServicesAboutMeSection = () => {
  const { height } = useWindowSize();
  const wavesMobileRef = useRef();

  useScrollPosition(({ currPos }) => {
    // waves animations onScroll
    if (-currPos.y < 1000) {
      wavesMobileRef.current.style.transform = `translate(${Math.floor(
        -currPos.y / 3,
      )}px , -100%`;
    }
  }, []);

  return (
    <>
      <Placeholder heightSize={height} />
      <StyledViewTemplate heightSize={height}>
        <WavesMobile ref={wavesMobileRef} />
        <AboutMe1 />
        <Title>What I do best?</Title>
        <Paragraph>
          Łączę Ilustracje z projektowaniem, typografię z grafiką, wiedzę z
          doświadczeniem, technologię z kreatywnością, aby zwizualizować Twoją
          idee, projekt, by stał się narzędziem do dalszego rozwoju Twojego
          biznesu...
        </Paragraph>
        <ServicesWrapper>
          <DecorsTop />
          <Illustrations />
          <GraphicDesign />
          <Pakeging />
          <PublicationsDesign />
          <Branding />
          <WebDesign />
        </ServicesWrapper>
        <SlideToHappyClientsSection>
          <StyledParagraph>
            and smile on your face just <br /> like from...
          </StyledParagraph>
          <StyledArrow />
        </SlideToHappyClientsSection>
      </StyledViewTemplate>
    </>
  );
};
export default ServicesAboutMeSection;
