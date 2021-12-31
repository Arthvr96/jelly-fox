import React from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import {
  StyledViewTemplate, Paragraph, StyledArrow, LanguageSwitchers, LanguageButton,
} from 'components/organisms/HeroSection/HeroSection.style';

const HeroSection = () => {
  const { height } = useWindowSize();
  return (
    <StyledViewTemplate height={height}>
      <Paragraph>
        The picture,
        <span>
            &nbsp;graphic design, illustration
        </span>
        <br />
        will reflect your needs and the solution to your problem.
        It has to work and let
        <span>
            &nbsp;your business grow&nbsp;
        </span>
        and it will be my mission.
      </Paragraph>
      <LanguageSwitchers>
        <LanguageButton type="button">PL</LanguageButton>
        <LanguageButton type="button" isSelected>EN</LanguageButton>
      </LanguageSwitchers>
      <StyledArrow />
    </StyledViewTemplate>
  );
};

export default HeroSection;
