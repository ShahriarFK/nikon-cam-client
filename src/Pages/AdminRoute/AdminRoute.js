import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  if (!admin) {
    return (
      <div className="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
