import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const userLogged = localStorage.getItem("userLogged");

  return (
    <Route
      {...rest}
      render={props =>
        userLogged === 'true' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
};

export default PrivateRoute;