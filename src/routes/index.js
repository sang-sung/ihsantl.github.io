import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NoMatch from "../pages/NoMatch";
import Main from "../pages/Main";

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
