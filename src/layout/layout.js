import SEO from 'components/templates/SEO/SEO';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/GlobalStyles';
import { theme } from 'theme/theme';

const Layout = ({ children, seo }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO seo={seo} />
    {children}
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.objectOf(PropTypes.string).isRequired,
};
