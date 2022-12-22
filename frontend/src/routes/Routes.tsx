import React from "react";
import { routes } from "../config/routes";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {Object.keys(routes).map((key) => {
        const {
          component,
          path,
          id,
          isPrivate,
          isStatic,
        }  = routes[key];
        const Component = component as React.ElementType;

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
};

export default AppRoutes;
