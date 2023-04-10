import { FC, PropsWithChildren } from 'react';

import { Navigate, Route } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

import { routes } from 'src/config/routes_config';

interface IProps {
  children: any;
}

export const PublicRoute: FC<PropsWithChildren<IProps>> = ({
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
