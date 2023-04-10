import { FC, PropsWithChildren } from 'react';

import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

import { routes } from 'src/config/routes_config';

interface IProps {
  children: any;
}

export const PrivateRoute: FC<PropsWithChildren<IProps>> = ({
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
