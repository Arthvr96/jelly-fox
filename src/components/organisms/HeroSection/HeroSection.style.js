import styled from 'styled-components';
import ArrowScrollDown from 'assets/svg/arowscrolldown.component.svg';

export const Paragraph = styled.p`
  width: 30rem;
  height: fit-content;
  margin-top: ${({ heightSize }) => (heightSize - 300) / 2}px;
  transform: translateY(-50%);
  font-family: ${({ theme }) => theme.fontsNames.headers};
  font-size: ${({ theme }) => theme.fontSize.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 4.4rem;
  color: ${({ theme }) => theme.colors.text.purple};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
`;

export const StyledArrow = styled(ArrowScrollDown)`
  position: absolute;
  bottom: 75px;
  left: 50%;
  width: 2.4rem;
  height: 3.9rem;
  transform: translateX(-50%);
`;

export const LanguageSwitchers = styled.div`
  position: absolute;
  bottom: 110px;
  right: 30px;
  display: flex;
`;

export const LanguageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.3rem;
  height: 4.3rem;
  background-color: ${({ theme }) => theme.colors.bg.white};
  border-radius: 100%;
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.bg.purple : theme.colors.bg.white};
  font-family: ${({ theme }) => theme.fontsNames.headers};
  font-size: ${({ theme }) => theme.fontSize.mobile.xxs};
  font-weight: ${({ theme, isSelected }) =>
    isSelected ? theme.fontWeight.bold : theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text.purple};
  padding: 0;
  margin: 0 0 0 1rem;
  line-height: 0;
`;
