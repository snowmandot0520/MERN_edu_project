import React from "react";
import { Navigate, Route } from "react-router-dom";

import { routes } from "../config/routes_config";
import { useAuth } from "../hooks/useAuth";

interface IProps {
  children: any;
}

export const PublicRoute: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
}) => {
  const auth = useAuth();

  /**
   * @description When user is logged in and the
   * user access public routes like login/signup we
   * redirect the user to home page
   */
  if (auth) {
    return <Navigate to={routes.home.path} replace={true} />;
  }

  return children;
};
