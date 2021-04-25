import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import StoreContext from '../../components/Store/context';

const PrivateComponent = ({ ...children }) => {
  const { token } = useContext(StoreContext);

  return token ? children.children : <Redirect to="/login" />;
};

export default PrivateComponent;
