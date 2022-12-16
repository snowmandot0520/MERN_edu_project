import React from "react";
import { routes } from "../config/routes";
import { Routes, Route } from "react-router-dom";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {Object.keys(routes).map((key) => {
        const { component: Component, path, id } = routes[key];
        return <Route key={id} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default AppRoutes;
