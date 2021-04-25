import React, { useState } from 'react';
import StoreContext from './context';

const StoreProvider = (props) => {
  const { children } = props;
  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <StoreContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
