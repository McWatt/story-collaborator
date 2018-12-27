import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import { isAuthenticated } from "../../state/authentication/selectors";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state)
  };
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
