import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./auth/login";
import { ThemeProvider } from "./components/theme-provider";
import { TeamProvider } from "./context/loginContext";
import AdmindashBoard from "./pages/adminDashboard";
import UserDashBoard from "./pages/userDashBoard";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TeamProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<UserDashBoard />} />
            <Route exact path="/admin" element={<AdmindashBoard />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </TeamProvider>
    </ThemeProvider>
  );
}
