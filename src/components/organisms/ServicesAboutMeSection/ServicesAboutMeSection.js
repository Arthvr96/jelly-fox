import React from 'react';
import { ViewTemplate } from 'components/templates/ViewTemplate/ViewTemplate';
import styled from 'styled-components';

const StyledViewTemplate = styled(ViewTemplate)`
  min-height: 20rem;
  background-color: ${({ theme }) => theme.colors.bg.purple};
`;

const ServicesAboutMeSection = () => (
  <StyledViewTemplate>
    <h2>Siema</h2>
  </StyledViewTemplate>
);
export default ServicesAboutMeSection;
