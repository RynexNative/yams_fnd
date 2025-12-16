import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes, AppRoute } from "./routes.config";
import ProtectedRoute from "./ProtectedRoute";
import React from "react";

function renderRoute(route: AppRoute): React.ReactNode {
  const element = route.isProtected ? (
    <ProtectedRoute permission={route.permission}>
      {route.layout
        ? React.cloneElement(route.layout, {}, route.element)
        : route.element}
    </ProtectedRoute>
  ) : (
    route.element
  );

  if (route.children && route.children.length > 0) {
    return (
      <Route key={route.path} path={route.path} element={element}>
        {route.children.map((child) => renderRoute(child))}
      </Route>
    );
  }

  return <Route key={route.path} path={route.path} element={element} />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => renderRoute(route))}
      </Routes>
    </BrowserRouter>
  );
}
