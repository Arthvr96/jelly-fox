import React from 'react';
import Layout from 'layout/layout';
import HeroSection from 'components/organisms/HeroSection/HeroSection';

const seo = {
  title: 'Jelly Fox',
  description: 'Description',
};

const IndexPage = () => (
  <Layout seo={seo}>
    <HeroSection />
  </Layout>
);

export default IndexPage;
