import { lazy } from 'react';

import { createBrowserHistory } from 'history';

import { IRoutesConfig, routes as routesConfig } from 'src/config/routes_config';

export const history = createBrowserHistory();

export const routes: IRoutesConfig = {
  [routesConfig.signIn.id]: {
    ...routesConfig.signIn,
    component: lazy(() => import('../pages/SignIn'))
  },
  [routesConfig.signUp.id]: {
    ...routesConfig.signUp,
    component: lazy(() => import('../pages/SignUp'))
  },
  [routesConfig.home.id]: {
    ...routesConfig.home,
    component: lazy(() => import('../pages/Home'))
  },
  [routesConfig.notFound.id]: {
    ...routesConfig.notFound,
    component: lazy(() => import('../pages/NotFound'))
  }
};
