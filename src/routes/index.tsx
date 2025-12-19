import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes, AppRoute } from "./routes.config";
import ProtectedRoute from "./ProtectedRoute";
import React from "react";

export function renderRoutes(routes: AppRoute[]) {
  return routes.map((route) => {
    // Protected wrapper
    const guardedElement = route.isProtected ? (
      <ProtectedRoute permission={route.permission}>
        {route.element}
      </ProtectedRoute>
    ) : (
      route.element
    );

    // CASE 1: Route has layout (IMPORTANT)
    if (route.layout) {
      return (
        <Route key={route.path} element={route.layout}>
          <Route
            path={route.path}
            element={guardedElement}
          />
          {route.children && renderRoutes(route.children)}
        </Route>
      );
    }

    // CASE 2: Normal route
    return (
      <Route
        key={route.path}
        path={route.path}
        element={guardedElement}
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
}


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </BrowserRouter>
  );
}
