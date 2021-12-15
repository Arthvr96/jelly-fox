import React from 'react';
import Layout from 'layout/layout';

const seo = {
  title: 'Jelly Fox',
  description: 'Description',
};

const IndexPage = () => (
  <Layout seo={seo}>
    <h2>Siema</h2>
    <p>Lorem ipsum doloers</p>
  </Layout>
);

export default IndexPage;
