import { ElementType, FC } from 'react';

import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'src/routes/PrivateRoute';
import { PublicRoute } from 'src/routes/PublicRoute';

import { routes } from 'src/config/routes';

export const AppRoutes: FC = () => (
    <Routes>
      {Object.keys(routes).map((key) => {
        const {
          component,
          path,
          id,
          isPrivate,
          isStatic,
        }  = routes[key];
        const Component = component as ElementType;

        if (isStatic) {
          return <Route key={id} path={path} element={<Component />} />;
        }

        if (isPrivate) {
          return (
            <Route
              key={id}
              path={path}
              element={
                <PrivateRoute>
                  <Component />
                </PrivateRoute>
              }
            />
          );
        }

        return (
          <Route
            key={id}
            path={path}
            element={
              <PublicRoute>
                <Component />
              </PublicRoute>
            }
          />
        );
      })}
    </Routes>
  );

export default AppRoutes;
