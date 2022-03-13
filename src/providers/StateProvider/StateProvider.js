import React from 'react';
import PropTypes from 'prop-types';

const StateProvider = ({ children }) => {
  return <div>{children}</div>;
};

export default StateProvider;

StateProvider.propTypes = {
  children: PropTypes.node,
};
