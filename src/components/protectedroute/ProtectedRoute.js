import React from 'react';
import { Route, navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : navigate('/')
      }
    />
  );
};

export default ProtectedRoute;
