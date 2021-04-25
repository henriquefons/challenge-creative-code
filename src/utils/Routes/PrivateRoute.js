import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import StoreContext from '../../components/Store/context';

const RoutesPrivate = (props) => {
  // eslint-disable-next-line
  const { component: Component, ...rest } = props;
  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() =>
        token === 'henriquebonitao' ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default RoutesPrivate;
