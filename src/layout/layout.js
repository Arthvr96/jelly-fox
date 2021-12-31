import HeaderBar from 'components/organisms/HeaderBar/HeaderBar';
import SEO from 'components/templates/SEO/SEO';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/GlobalStyles';
import { theme as themeData } from 'theme/theme';
import { Content } from 'layout/layout.style';

const Layout = ({ children, seo }) => (
  <ThemeProvider theme={themeData}>
    <GlobalStyle />
    <SEO seo={seo} />
    <Content>
      <HeaderBar />
      {children}
    </Content>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.objectOf(PropTypes.string).isRequired,
};
