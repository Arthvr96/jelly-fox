import React from 'react';
import Layout from 'layout/layout';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import ServicesAboutMeSection from 'components/organisms/ServicesAboutMeSection/ServicesAboutMeSection';

const seo = {
  title: 'Jelly Fox',
  description: 'Description',
};

const IndexPage = () => (
  <Layout seo={seo}>
    <HeroSection />
    <ServicesAboutMeSection />
  </Layout>
);

export default IndexPage;
