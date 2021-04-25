import React, { useState } from 'react';
import StoreContext from './context';

const StoreProvider = ({ ...children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <StoreContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
