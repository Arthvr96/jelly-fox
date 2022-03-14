import React from 'react';
import GlobalStateProvider from './src/providers/GlobalStateProvider';

// eslint-disable-next-line react/display-name,react/prop-types,react/function-component-definition
export default ({ element }) => {
  return <GlobalStateProvider>{element}</GlobalStateProvider>;
};
