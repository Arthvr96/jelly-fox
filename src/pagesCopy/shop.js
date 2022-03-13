import React, { useEffect } from 'react';
import Layout from 'layout/layout';
import { useGlobalState } from 'providers/GlobalStateProvider/GlobalStateProvider';

const seo = {
  title: 'Jelly Fox - shop',
  description: 'Description',
};

const Shop = () => {
  const { handleSetCurrentRoute } = useGlobalState();

  useEffect(() => {
    handleSetCurrentRoute('/shop');
  }, [handleSetCurrentRoute]);
  return (
    <Layout seo={seo}>
      <h2>Shop (soon)</h2>
    </Layout>
  );
};

export default Shop;
