import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDashBoard from "./pages/userDashBoard";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserDashBoard />} />
      </Routes>
    </Router>
  );
}
