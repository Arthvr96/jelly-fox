import React, { useEffect } from 'react';
import Layout from 'layout/layout';
import { useGlobalState } from '../providers/GlobalStateProvider';

const seo = {
  title: 'Jelly Fox - projects',
  description: 'Description',
};

const Projects = () => {
  const { handleSetCurrentRoute } = useGlobalState();

  useEffect(() => {
    handleSetCurrentRoute('/projects');
  }, [handleSetCurrentRoute]);

  return (
    <Layout seo={seo}>
      <h2>My Projects</h2>
    </Layout>
  );
};

export default Projects;
