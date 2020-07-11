import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner, SpinnerWrapper } from "./Styles";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) {
        return (
          <SpinnerWrapper>
            <Spinner className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </SpinnerWrapper>
        );
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
