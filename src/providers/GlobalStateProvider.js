import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { usePrevious } from '../hooks/usePrevious';

const GlobalStateContext = React.createContext({
  currentRoute: '',
  handleSetCurrentRoute: () => {},
  isOpen: false,
  setIsOpen: () => {},
  prevRoute: '',
});

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

const GlobalStateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/home');
  const prevRoute = usePrevious(currentRoute);

  const handleSetCurrentRoute = (url) => {
    setCurrentRoute(url);
  };

  const values = useMemo(() => {
    return {
      currentRoute,
      handleSetCurrentRoute,
      isOpen,
      setIsOpen,
      prevRoute,
    };
  }, [currentRoute, isOpen, prevRoute]);
  return (
    <GlobalStateContext.Provider value={values}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;

GlobalStateProvider.propTypes = {
  children: PropTypes.node,
};
