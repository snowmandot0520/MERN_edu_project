import { lazy } from 'react';

import { createBrowserHistory } from 'history';

import { IRoutesConfig, routes as routes_config } from 'src/config/routes_config';

export const history = createBrowserHistory();

export const routes: IRoutesConfig = {
  [routes_config.signIn.id]: {
    ...routes_config.signIn,
    component: lazy(() => import('../pages/SignIn'))
  },
  [routes_config.signUp.id]: {
    ...routes_config.signUp,
    component: lazy(() => import('../pages/SignUp'))
  },
  [routes_config.home.id]: {
    ...routes_config.home,
    component: lazy(() => import('../pages/Home'))
  },
  [routes_config.notFound.id]: {
    ...routes_config.notFound,
    component: lazy(() => import('../pages/NotFound'))
  }
};
