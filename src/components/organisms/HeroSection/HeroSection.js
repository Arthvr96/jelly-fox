import React, { useRef } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import {
  StyledViewTemplate,
  Paragraph,
  StyledArrow,
  LanguageSwitchers,
  LanguageButton,
} from 'components/organisms/HeroSection/HeroSection.style';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const HeroSection = () => {
  const heroSectionRef = useRef(null);
  const { height } = useWindowSize(0);

  useScrollPosition(({ currPos }) => {
    if (-currPos.y < window.innerHeight) {
      heroSectionRef.current.style.transform = `translateY(${Math.floor(
        currPos.y / 4,
      )}px`;
    }
  }, []);

  return (
    <StyledViewTemplate ref={heroSectionRef} height={height}>
      <Paragraph height={height}>
        The picture,
        <span>&nbsp;graphic design, illustration</span>
        <br />
        will reflect your needs and the solution to your problem. It has to work
        and let
        <span>&nbsp;your business grow&nbsp;</span>
        and it will be my mission.
      </Paragraph>
      <LanguageSwitchers>
        <LanguageButton type="button">PL</LanguageButton>
        <LanguageButton type="button" isSelected>
          EN
        </LanguageButton>
      </LanguageSwitchers>
      <StyledArrow />
    </StyledViewTemplate>
  );
};

export default HeroSection;
