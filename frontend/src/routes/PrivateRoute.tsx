import React from "react";
import { Navigate } from "react-router-dom";

import { routes } from "./../config/routes_config";
import { useAuth } from "../hooks/useAuth";

interface IProps {
  children: any;
}

export const PrivateRoute: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
}) => {
  const auth = useAuth();

  /**
   * @description When user is not logged in and the
   * user access private routes like home page we
   * redirect the user to login page
   */
  if (!auth) {
    return <Navigate to={routes.signIn.path} replace={true} />;
  }

  return children;
};
