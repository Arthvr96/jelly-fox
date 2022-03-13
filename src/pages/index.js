import React from 'react';
import StateProvider from 'providers/StateProvider/StateProvider';

const IndexPage = () => {
  return (
    <StateProvider>
      <h2>siema</h2>
    </StateProvider>
  );
};

export default IndexPage;

//
// import React, { useEffect } from 'react';
// import Layout from 'layout/layout';
// import HeroSection from 'components/organisms/HeroSection/HeroSection';
// import ServicesAboutMeSection from 'components/organisms/ServicesAboutMeSection/ServicesAboutMeSection';
// import { useGlobalState } from 'providers/GlobalStateProvider/GlobalStateProvider';
//
// const seo = {
//   title: 'Jelly Fox',
//   description: 'Description',
// };
//
// const IndexPage = () => {
//   const { handleSetCurrentRoute } = useGlobalState();
//
//   useEffect(() => {
//     handleSetCurrentRoute('/home');
//   }, [handleSetCurrentRoute]);
//   return (
//     <Layout seo={seo}>
//       <HeroSection />
//       <ServicesAboutMeSection />
//     </Layout>
//   );
// };
//
// export default IndexPage;
