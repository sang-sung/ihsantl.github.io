import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoMatch from "../pages/NoMatch";
import Main from "../pages/Main";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/ihsantl.github.io" element={<Main />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}
