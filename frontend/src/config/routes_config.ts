import { ElementType } from 'react';

export type IRoutesConfig = {
  [key: string]: {
    id: string;
    name: string;
    description?: string;
    path: string;
    path_string: (params?: any) => string;
    exact: boolean;
    isPrivate: boolean;
    isStatic: boolean;
    component?: ElementType | ElementType<any> | undefined;
  };
};
/**
 * @description the aim to create this config is to have
 *  a single source of truth for the routes defination.
 *  the reason we are not importing the components here
 *  for the property `component` is to avoid circular
 *  import dependencies error.
 *  components will be assigned in config/routes.ts
 */
export const routes: IRoutesConfig = {
  home: {
    id: 'home',
    name: 'Home',
    description: 'Home',
    path: '/',
    path_string: () => {
      return `/`;
    },
    exact: true,
    isPrivate: false,
    isStatic: true,
    component: undefined
  },
  signIn: {
    id: 'signIn',
    name: 'SignIn',
    description: 'SignIn',
    path: '/sign-in',
    path_string: () => {
      return `/sign-in`;
    },
    exact: true,
    isPrivate: false,
    isStatic: false,
    component: undefined
  },
  signUp: {
    id: 'signUp',
    name: 'SignUp',
    description: 'SignUp',
    path: '/sign-up',
    path_string: () => {
      return `/sign-up`;
    },
    exact: true,
    isPrivate: false,
    isStatic: false,
    component: undefined
  },
  notFound: {
    id: 'notFound',
    name: '404',
    description: 'Page not found',
    path: '/*',
    path_string: () => {
      return `/404`;
    },
    exact: false,
    isPrivate: false,
    isStatic: true,
    component: undefined
  }
};
