import React from 'react';
import StoreContext from './context';

const StoreProvider = (props) => {
  const { children } = props;
  const token = localStorage.getItem('token');

  return (
    <StoreContext.Provider
      value={{
        token,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
