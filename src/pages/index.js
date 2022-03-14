import React from 'react';
import Layout from 'layout/layout';
import HeroSection from 'components/organisms/HeroSection/HeroSection';
import ServicesAboutMeSection from 'components/organisms/ServicesAboutMeSection/ServicesAboutMeSection';
import { useGlobalState } from '../providers/GlobalStateProvider';

const seo = {
  title: 'Jelly Fox',
  description: 'Description',
};

const IndexPage = () => {
  return (
    <Layout seo={seo}>
      <HeroSection />
      <ServicesAboutMeSection />
    </Layout>
  );
};

export default IndexPage;
