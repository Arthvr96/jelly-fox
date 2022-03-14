import React, { useEffect } from 'react';
import Layout from 'layout/layout';
import { useGlobalState } from 'providers/GlobalStateProvider';

const seo = {
  title: 'Jelly Fox - about me',
  description: 'Description',
};

const About = () => {
  const { handleSetCurrentRoute } = useGlobalState();

  useEffect(() => {
    handleSetCurrentRoute('/about');
  }, [handleSetCurrentRoute]);
  return (
    <Layout seo={seo}>
      <h2>About me</h2>
    </Layout>
  );
};

export default About;
