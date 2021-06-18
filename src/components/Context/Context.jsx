import React, { useReducer } from 'react';
import initialState from 'data/initialState';
import rootReducer from 'components/reducer/reducer';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return <MainContext.Provider value={{ state, dispatch }}>{children}</MainContext.Provider>;
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
