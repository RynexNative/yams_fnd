import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes, AppRoute } from "./routes.config";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "@/pages/Error/NotFound";
import React from "react";

function renderRoute(route: AppRoute): React.ReactNode {
  const element = route.isProtected ? (
    <ProtectedRoute
      permission={route.permission}
      allowedAccountTypes={route.allowedAccountTypes}
    >
      {route.element}
    </ProtectedRoute>
  ) : (
    route.element
  );

  /**
   * ROUTE WITH LAYOUT
   */
  if (route.layout) {
    return (
      <Route key={route.path} element={route.layout}>
        <Route path={route.path} element={element} />
        {route.children?.map(renderRoute)}
      </Route>
    );
  }

  /**
   * NORMAL ROUTE
   */
  return (
    <Route key={route.path} path={route.path} element={element}>
      {route.children?.map(renderRoute)}
    </Route>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(renderRoute)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
