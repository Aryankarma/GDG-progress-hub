import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDashBoard from "./pages/userDashBoard";
import AdmindashBoard from "./pages/admindashBoard";
import Login from "./auth/login";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserDashBoard />} />
        <Route exact path="/admin" element={<AdmindashBoard />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
