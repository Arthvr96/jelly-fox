import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalStateContext = React.createContext({});

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

const GlobalStateProvider = ({ children }) => {
  const [test, setTest] = useState('siema');
  return (
    <GlobalStateContext.Provider
      value={{
        test,
        setTest,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;

GlobalStateProvider.propTypes = {
  children: PropTypes.node,
};
