import React, { useEffect } from 'react';
import Layout from 'layout/layout';
import { useGlobalState } from 'providers/GlobalStateProvider';

const seo = {
  title: 'Jelly Fox - contact.js',
  description: 'Description',
};

const Contact = () => {
  const { handleSetCurrentRoute } = useGlobalState();

  useEffect(() => {
    handleSetCurrentRoute('/contact');
  }, [handleSetCurrentRoute]);
  return (
    <Layout seo={seo}>
      <h2>Contact</h2>
    </Layout>
  );
};

export default Contact;
