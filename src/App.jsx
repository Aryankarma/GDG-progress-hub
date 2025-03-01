import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDashBoard from "./pages/userDashBoard";
import AdmindashBoard from "./pages/adminDashboard";
import Login from "./auth/login";
import { TeamProvider } from "./context/loginContext";
import { ThemeProvider } from "./components/themeProvider";
import SuperAdmin from "./pages/superadmin";

export default function App() {
  return (
    <TeamProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route exact path="/" element={<UserDashBoard />} />
            <Route exact path="/admin" element={<AdmindashBoard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/superadmin" element={<SuperAdmin />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </TeamProvider>
  );
}
