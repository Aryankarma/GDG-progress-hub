import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDashBoard from "./pages/userDashBoard";
import AdmindashBoard from "./pages/adminDashboard";
import Login from "./auth/login";
import { TeamProvider } from "./context/loginContext";
export default function App() {
  return (
    <TeamProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<UserDashBoard />} />
          <Route exact path="/admin" element={<AdmindashBoard />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </TeamProvider>
  );
}