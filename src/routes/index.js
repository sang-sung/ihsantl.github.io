import React, { useEffect, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const NoMatch = lazy(() => import("../pages/NoMatch"));
const Main = lazy(() => import("../pages/Main"));

export default function index() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/ihsantl.github.io" replace />}
        />
        <Route path="/ihsantl.github.io" element={<Main />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
