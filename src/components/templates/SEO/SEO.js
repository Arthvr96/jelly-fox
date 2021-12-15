import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ({ children, seo: { title, description } }) => (
  <>
    <Helmet>
      <html lang="pl" />
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Source+Sans+Pro:wght@400;700&display=swap" rel="stylesheet" />
    </Helmet>
    {children}
  </>
);

export default SEO;

SEO.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.objectOf(PropTypes.string).isRequired,
};
